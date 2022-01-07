import { JSPteroAPIError } from 'index';
import { Client } from '../index';
import { WebsocketAuthData } from '../interfaces/WebsocketAuthData';
import { WebsocketClient } from '../Websocket';

export class consoleMethods {
  constructor(
    private readonly client: Client,
    private readonly errorHandler: (error: JSPteroAPIError) => void
  ) {}
  /**
   * @internal
   */
  private getWebsocketAuthData = async (
    serverId: string
  ): Promise<WebsocketAuthData> => {
    return this.client.request(
      'GET',
      null,
      'data',
      `/api/client/servers/${serverId}/websocket`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @remarks This method is used to connect to server websocket and have automatic authentication. This exposes the websocket client.
   * @returns WebsocketClient
   * @example
   * ```ts
   * const res = await client.startConsoleConnection('c2f5a3b6') // res = WebsocketClient
   * ```
   * @example
   * ```ts
   * client.startConsoleConnection('c2f5a3b6').then((res) => console.log(res)) // res = WebsocketClient
   * ```
   */
  public startConsoleConnection = async (
    serverId: string
  ): Promise<WebsocketClient> => {
    const auth = await this.getWebsocketAuthData(serverId);
    return new WebsocketClient(
      this.errorHandler,
      auth,
      this.getWebsocketAuthData.bind(this, serverId)
    );
  };
}
