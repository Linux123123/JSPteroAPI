import { Client } from '../index';
import { makeOptions } from '../../modules/Functions';
import {
    Database,
    DatabaseAttributes,
    DatabaseIncludeInput,
} from '../interfaces/Database';

export class databaseMethods {
    constructor(private readonly client: Client) {}
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param options - Include information about relationships
     * @returns Returns array of servers databases (Database[])
     * @example
     * ```ts
     * const res = await client.getAllDatabases('c2f5a3b6') // res = Database[]
     * ```
     * @example
     * ```ts
     * client.getAllDatabases('c2f5a3b6').then((res) => console.log(res)) // res = Database[]
     * ```
     */
    public getAllDatabases = async (
        serverId: string,
        options?: DatabaseIncludeInput,
    ): Promise<Database[]> => {
        return this.client.request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/databases${makeOptions({
                includes: { ...options },
            })}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param databaseName - Database name
     * @param connectionsAllowedFrom - Connections allowed from
     * @param options - Include information about relationships
     * @returns Returns new database information (DatabaseAttributes)
     * @example
     * ```ts
     * const res = await client.createDatabase('c2f5a3b6', 'Information') // res = DatabaseAttributes
     * ```
     * @example
     * ```ts
     * client.createDatabase('c2f5a3b6', 'info').then((res) => console.log(res)) // res = DatabaseAttributes
     * ```
     */
    public createDatabase = async (
        serverId: string,
        databaseName: string,
        connectionsAllowedFrom = '%',
        options?: DatabaseIncludeInput,
    ): Promise<DatabaseAttributes> => {
        return this.client.request(
            'POST',
            { database: databaseName, remote: connectionsAllowedFrom },
            'attributes',
            `/api/client/servers/${serverId}/databases${makeOptions({
                includes: { ...options },
            })}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param databaseId - Database id
     * @returns If successful returns Sucesfully deleted!
     * @example
     * ```ts
     * const res = await client.deleteDatabase('c2f5a3b6', 's5_info') // res = Sucesfully deleted!
     * ```
     * @example
     * ```ts
     * client.deleteDatabase('c2f5a3b6', 's3_good').then((res) => console.log(res)) // res = Sucesfully deleted!
     * ```
     */
    public deleteDatabase = (
        serverId: string,
        databaseId: string,
    ): Promise<string> => {
        return this.client.request(
            'DELETE',
            null,
            'Sucesfully deleted!',
            `/api/client/servers/${serverId}/databases/${databaseId}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param databaseId - Database id
     * @returns Returns database information + Relationships(password)
     * @example
     * ```ts
     * const res = await client.rotateDatabasePass('c2f5a3b6', 's5_info') // res = DatabaseAttributesRelationship
     * ```
     * @example
     * ```ts
     * client.rotateDatabasePass('c2f5a3b6', 's3_good').then((res) => console.log(res)) // res = DatabaseAttributesRelationship
     * ```
     */
    public rotateDatabasePass = async (
        serverId: string,
        databaseId: string,
    ): Promise<DatabaseAttributes> => {
        return this.client.request(
            'POST',
            null,
            'attributes',
            `/api/client/servers/${serverId}/databases/${databaseId}/rotate-password`,
        );
    };
}
