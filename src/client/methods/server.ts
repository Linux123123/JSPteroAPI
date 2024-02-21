import { Client } from '../index';
import { makeOptions, MakeOpts, paginate } from '../../modules/Functions';
import {
  Server,
  ServerAttributes,
  ServerFilterInput,
  ServerIncludeInput,
  Servers
} from '../interfaces/Server';
import { ServerResources } from '../interfaces/ServerResources';
import { WebsocketAuthData } from '../interfaces/WebsocketAuthData';

export class serverMethods {
  constructor(private readonly client: Client) {}
  /**
   * @internal
   */
  private getServers = async (options: MakeOpts): Promise<Servers> => {
    return this.client.request(
      'GET',
      null,
      '',
      `/api/client${makeOptions(options)}`
    );
  };
  /**
   * @param options - Include information about server relationships
   * @param filter - Filter servers by specified field and value
   * @returns An Array of servers
   * @example
   * ```ts
   * const res = await client.getAllServers() // res = Server[]
   * ```
   * @example
   * ```ts
   * client.getAllServers().then((res) => console.log(res)) // res = Server[]
   * ```
   */
  public getAllServers = async (
    options?: ServerIncludeInput,
    filter?: ServerFilterInput,
    admin = false
  ): Promise<Server[]> => {
    return await paginate<Server>(this.getServers.bind(this), {
      includes: { ...options },
      admin: admin,
      filter: filter
    });
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param options - Include information about server relationships
   * @returns Server information
   * @example
   * ```ts
   * const res = await client.getServerInfo('c2f5a3b6') // res = ServerAttributes
   * ```
   * @example
   * ```ts
   * client.getServerInfo('c2f5a3b6').then((res) => console.log(res)) // res = ServerAttributes
   * ```
   */
  public getServerInfo = async (
    serverId: string,
    options?: ServerIncludeInput
  ): Promise<ServerAttributes> => {
    return this.client.request(
      'GET',
      null,
      'attributes',
      `/api/client/servers/${serverId}${makeOptions({
        includes: { ...options }
      })}`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @returns Server resource usage object
   * @example
   * ```ts
   * const res = await client.getServerResources('c2f5a3b6') // res = ServerResources
   * ```
   * @example
   * ```ts
   * client.getServerResources('c2f5a3b6').then((res) => console.log(res)) // res = ServerResources
   * ```
   */
  public getServerResources = async (
    serverId: string
  ): Promise<ServerResources> => {
    return this.client.request(
      'GET',
      null,
      'attributes',
      `/api/client/servers/${serverId}/resources`
    );
  };
  /**
   * @param serverId - ID of the server to send a command to
   * @param command - Command to send
   * @returns If successful returns Successfuly sent the command!
   * @example
   * ```ts
   * const res = await client.sendCommand('c2f5a3b6', 'give Linux123123 star') // res = Successfuly sent the command!
   * ```
   * @example
   * ```ts
   * client.sendCommand('c2f5a3b6', 'give Linux123123 star').then((res) => console.log(res)) // res = Successfuly sent the command!
   * ```
   */
  public sendCommand = async (
    serverId: string,
    command: string
  ): Promise<string> => {
    return this.client.request(
      'POST',
      { command: command },
      'Successfuly sent the command!',
      `/api/client/servers/${serverId}/command`
    );
  };
  /**
   * @param serverId - ID of the server to send a command to
   * @param action - start / stop / restart / kill
   * @returns If successful returns Successfuly set power state!
   * @example
   * ```ts
   * const res = await client.setPowerState('c2f5a3b6', 'start') // res = Successfuly set power state!
   * ```
   * @example
   * ```ts
   * client.setPowerState('c2f5a3b6', 'kill).then((res) => console.log(res)) // res = Successfuly set power state!
   * ```
   */
  public setPowerState = async (
    serverId: string,
    action: 'start' | 'stop' | 'restart' | 'kill'
  ): Promise<string> => {
    return this.client.request(
      'POST',
      { signal: action },
      'Successfuly set power state!',
      `/api/client/servers/${serverId}/power`
    );
  };
  /**
   * @param serverId - ID of the server to get a websocket url for
   * @returns Websocket url and token for the server
   * @example
   * ```ts
   * const res = await client.getWebsocketUrl('c2f5a3b6') // res = wss://panel.example.xyz/api/client/servers/c2f5a3b6/ws
   * ```
   * @example
   * ```ts
   * client.getWebsocketUrl('c2f5a3b6').then((res) => console.log(res)) // res = wss://panel.example.xyz/api/client/servers/c2f5a3b6/ws
   * ```
   */
  public getWebsocketUrl = async (
    serverId: string
  ): Promise<WebsocketAuthData> => {
    return this.client.request(
      'GET',
      null,
      '',
      `/api/client/servers/${serverId}/websocket`
    );
  };
}
