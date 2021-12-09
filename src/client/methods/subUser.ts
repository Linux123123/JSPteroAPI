import {
  SubUser,
  SubUserAttributes,
  SubuserPermission
} from 'client/interfaces/SubUser';
import { Client } from '../index';

export class subUserMethods {
  constructor(private readonly client: Client) {}
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @returns SubUser[]
   * @example
   * ```ts
   * const res = await client.getAllSubUsers('c2f5a3b6') // res = SubUser[]
   * ```
   * @example
   * ```ts
   * client.getAllSubUsers('c2f5a3b6').then((res) => console.log(res)) // res = SubUser[]
   * ```
   */
  public getAllSubUsers = async (serverId: string): Promise<SubUser[]> => {
    return this.client.request(
      'GET',
      null,
      'data',
      `/api/client/servers/${serverId}/users`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param subUserId - UUID of the subuser to get
   * @returns SubUserAttributes
   * @example
   * ```ts
   * const res = await client.getSubUserInfo('c2f5a3b6', '60a7aec3-e17d-4aa9-abb3-56d944d204b4') // res = SubUserAttributes
   * ```
   * @example
   * ```ts
   * client.getSubUserInfo('c2f5a3b6', '60a7aec3-e17d-4aa9-abb3-56d944d204b4').then((res) => console.log(res)) // res = SubUserAttributes
   * ```
   */
  public getSubUserInfo = async (
    serverId: string,
    subUserId: string
  ): Promise<SubUserAttributes> => {
    return this.client.request(
      'GET',
      null,
      'attributes',
      `/api/client/servers/${serverId}/users/${subUserId}`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param email - Email of the subuser
   * @param permission - Permission of the subuser
   * @returns SubUserAttributes
   * @example
   * ```ts
   * const res = await client.createSubUser('c2f5a3b6', 'api@gmail.com', ['control.console']) // res = SubUserAttributes
   * ```
   * @example
   * ```ts
   * client.createSubUser('c2f5a3b6', 'api@gmail.com', ['control.console']).then((res) => console.log(res)) // res = SubUserAttributes
   * ```
   */
  public createSubUser = async (
    serverId: string,
    email: string,
    permissions: SubuserPermission[]
  ): Promise<SubUserAttributes> => {
    return this.client.request(
      'POST',
      { email, permissions },
      'attributes',
      `/api/client/servers/${serverId}/users`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param subUserId - UUID of the subuser to get
   * @param permission - Permission of the subuser
   * @returns SubUserAttributes
   * @example
   * ```ts
   * const res = await client.updateSubUserPermissions('c2f5a3b6', '60a7aec3-e17d-4aa9-abb3-56d944d204b4', ['control.console']) // res = SubUserAttributes
   * ```
   * @example
   * ```ts
   * client.updateSubUserPermissions('c2f5a3b6', '60a7aec3-e17d-4aa9-abb3-56d944d204b4', ['control.console']).then((res) => console.log(res)) // res = SubUserAttributes
   * ```
   */
  public updateSubUserPermissions = async (
    serverId: string,
    subUserId: string,
    permissions: SubuserPermission[]
  ): Promise<SubUserAttributes> => {
    return this.client.request(
      'POST',
      { permissions },
      'attributes',
      `/api/client/servers/${serverId}/users/${subUserId}`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param subUserId - UUID of the subuser to get
   * @returns If successful returns Successfuly deleted SubUser!
   * @example
   * ```ts
   * const res = await client.deleteSubUser('c2f5a3b6', '60a7aec3-e17d-4aa9-abb3-56d944d204b4') // res = Successfuly deleted SubUser!
   * ```
   * @example
   * ```ts
   * client.deleteSubUser('c2f5a3b6', '60a7aec3-e17d-4aa9-abb3-56d944d204b4').then((res) => console.log(res)) // res = Successfuly deleted SubUser!
   * ```
   */
  public deleteSubUser = async (
    serverId: string,
    subUserId: string
  ): Promise<string> => {
    return this.client.request(
      'DELETE',
      null,
      'Successfuly deleted SubUser!',
      `/api/client/servers/${serverId}/users/${subUserId}`
    );
  };
}
