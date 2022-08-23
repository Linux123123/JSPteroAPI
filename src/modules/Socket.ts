import { WebSocket, Event, MessageEvent, CloseEvent, ErrorEvent } from 'ws';

export class Socket {
  constructor(
    private readonly url: string,
    private readonly options: {
      onopen: (this: Socket, ev: Event) => void;
      onmessage: (this: Socket, ev: MessageEvent) => void;
      onreconnect: (this: Socket, ev: Event | CloseEvent | ErrorEvent) => void;
      onmaximum: (this: Socket, ev: CloseEvent | ErrorEvent) => void;
      onclose: (this: Socket, ev: CloseEvent) => void;
      onerror: (this: Socket, ev: ErrorEvent) => void;
    }
  ) {
    this.open();
  }

  declare ws: WebSocket;
  declare timer: NodeJS.Timeout;
  private reconnectNum = 0;

  public open = () => {
    const options = this.options;
    const reconnect = this.reconnect;
    this.ws = new WebSocket(this.url);

    this.ws.onmessage = options.onmessage;

    const onOpen = options.onopen.bind(this);
    this.ws.onopen = (e) => {
      onOpen(e);
      this.reconnectNum = 0;
    };

    const onClose = options.onclose.bind(this);
    this.ws.onclose = function (e) {
      e.code === 1e3 || e.code === 1001 || e.code === 1005 || reconnect(e);
      onClose(e);
    };

    const onError = options.onerror.bind(this);
    this.ws.onerror = function (e) {
      e && (e as unknown as Record<string, string>).code === 'ECONNREFUSED'
        ? reconnect(e)
        : onError(e);
    };
  };

  private reconnect = (e: CloseEvent | ErrorEvent) => {
    const onReconnect = this.options.onreconnect.bind(this);
    const onMaximum = this.options.onmaximum.bind(this);

    const open = this.open;
    if (this.timer && this.reconnectNum++ < Infinity) {
      this.timer = setTimeout(function () {
        onReconnect(e);
        open();
      }, 1e3);
    } else {
      onMaximum(e);
    }
  };

  public json = (x: unknown) => {
    this.ws.send(JSON.stringify(x));
  };

  public send = (x: unknown) => {
    this.ws.send(x);
  };

  public close = (x?: number, y?: string | Buffer) => {
    clearTimeout(this.timer);
    this.ws.close(x || 1e3, y);
  };
}
