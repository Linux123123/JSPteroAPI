import { Client } from '../index';

export class settingsMethods {
  constructor(private readonly client: Client) {}
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param name - New name for the server
   * @returns Successfuly set new server name!
   * @example
   * ```ts
   * const res = await client.renameServer('c2f5a3b6', 'Best Server') // res = Successfuly set new server name!
   * ```
   * @example
   * ```ts
   * client.renameServer('c2f5a3b6', 'Best Server').then((res) => console.log(res)) // res = Successfuly set new server name!
   * ```
   */
  public renameServer = async (
    serverId: string,
    name: string
  ): Promise<string> => {
    return await this.client.request(
      'POST',
      { name },
      'Successfuly set new server name!',
      `/api/client/servers/${serverId}/settings/rename`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @returns Successfuly started reinstalling!
   * @example
   * ```ts
   * const res = await client.reinstallServer('c2f5a3b6') // res = Successfuly started reinstalling!
   * ```
   * @example
   * ```ts
   * client.reinstallServer('c2f5a3b6').then((res) => console.log(res)) // res = Successfuly started reinstalling!
   * ```
   */
  public reinstallServer = async (serverId: string): Promise<string> => {
    return await this.client.request(
      'POST',
      null,
      'Successfuly started reinstalling!',
      `/api/client/servers/${serverId}/settings/reinstall`
    );
  };
}
