/** @module ClientWebsocket */

import { EventEmitter } from 'node:events';
import { WebsocketAuthData } from './interfaces/WebsocketAuthData';
import { JSPteroAPIError } from '../modules/Error';
import { Socket } from '../modules/Socket';

const reconnectErrors = [
  'jwt: exp claim is invalid',
  'jwt: created too far in past (denylist)'
];

export class WebsocketClient extends EventEmitter {
  constructor(
    errorHandler: (error: JSPteroAPIError) => void,
    auth: WebsocketAuthData,
    private getToken: () => Promise<WebsocketAuthData>
  ) {
    super();
    // Allow 100 listeners for this instance
    this.setMaxListeners(100);
    this.updateToken = ((
      getToken: () => Promise<WebsocketAuthData>,
      socket: WebsocketClient
    ) => {
      if (this.isUpdating) {
        return;
      }

      this.isUpdating = true;

      try {
        getToken().then((data) => socket.setToken(data.token));
      } catch (e) {
        if (e instanceof JSPteroAPIError) {
          if (
            e.ERRORS[0] ===
            'This server is currently suspended and the functionality requested is unavailable.'
          ) {
            return this.close(409, 'Suspended');
          }
          return errorHandler(e);
        }
        throw e;
      }
    }).bind(undefined, this.getToken, this);

    this.setToken(auth.token).connect(auth.socket);

    // Set listerners
    this.on('daemon error', (message) => {
      console.error(message);
    });

    this.on('token expiring', () => this.updateToken());
    this.on('token expired', () => this.updateToken());
    this.on('jwt error', (error: string) => {
      if (reconnectErrors.find((v) => error.toLowerCase().indexOf(v) >= 0)) {
        this.updateToken();
      } else {
        throw new Error(error);
      }
    });
    this.on('transfer status', (status: string) => {
      if (status === 'starting' || status === 'success') {
        return;
      }

      // This code forces a reconnection to the websocket which will connect us to the target node instead of the source node
      // in order to be able to receive transfer logs from the target node.
      this.close();
      this.open();
    });
  }

  private isUpdating = false;

  // Timer instance for this socket.
  private timer!: NodeJS.Timeout;

  // The backoff for the timer, in milliseconds.
  private backoff = 5000;

  // The socket instance being tracked.
  private socket: Socket | null = null;

  // The URL being connected to for the socket.
  private url: string | null = null;

  // The authentication token passed along with every request to the Daemon.
  // By default this token expires every 15 minutes and must therefore be
  // refreshed at a pretty continuous interval. The socket server will respond
  // with "token expiring" and "token expired" events when approaching 3 minutes
  // and 0 minutes to expiry.
  private token = '';

  // Connects to the websocket instance and sets the token for the initial request.
  private connect(url: string): this {
    this.url = url;

    this.timer && clearTimeout(this.timer);

    // Close socket if needed
    if (this.socket?.ws.OPEN) {
      this.close();
    }

    this.socket = new Socket(this.url, {
      onmessage: (e) => {
        try {
          const { event, args } = JSON.parse(e.data.toString());
          args ? this.emit(event, ...args) : this.emit(event);
        } catch (ex) {
          console.warn('Failed to parse incoming websocket message.', ex);
        }
      },
      onopen: () => {
        // Clear the timers, we managed to connect just fine.
        this.timer && clearTimeout(this.timer);
        this.backoff = 5000;

        this.emit('SOCKET_OPEN');
        this.authenticate();
      },
      onreconnect: () => {
        this.emit('SOCKET_RECONNECT');
        this.authenticate();
      },
      onclose: () => this.emit('SOCKET_CLOSE'),
      onerror: (event) => {
        if (
          event.message ===
          'WebSocket was closed before the connection was established'
        )
          return;
        throw new Error(event.message);
      },
      onmaximum: () => {
        return;
      }
    });

    this.timer = setTimeout(() => {
      this.backoff = this.backoff + 2500 >= 20000 ? 20000 : this.backoff + 2500;
      this.socket && this.socket.close(undefined, 'timeout');
      clearTimeout(this.timer);

      // Re-attempt connecting to the socket.
      this.connect(url);
    }, this.backoff);

    return this;
  }

  private updateToken!: () => void;

  // Sets the authentication token to use when sending commands back and forth
  // between the websocket instance.
  private setToken(token: string, isUpdate = false): this {
    this.token = token;

    if (isUpdate) {
      this.authenticate();
    }

    return this;
  }

  private authenticate(): void {
    if (this.url && this.token) {
      this.send('auth', this.token);
    }
  }

  public close(code?: number, reason?: string): void {
    this.url = null;
    this.token = '';
    this.socket && this.socket.close(code, reason);
  }

  private open(): void {
    this.socket && this.socket.open();
  }

  public send(event: string, payload?: string | string[]): void {
    this.socket &&
      this.socket.send(
        JSON.stringify({
          event,
          args: Array.isArray(payload) ? payload : [payload]
        })
      );
  }
}
