import makeIncludes from '../../modules/Functions';
import Request from '../ClientRequest';
import Database, {
    DatabaseAttributes,
    DatabaseIncludeInput,
} from '../interfaces/Database';

export default class databaseMethods {
    public constructor(private host: string, private key: string) {}
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
    public async getAllDatabases(
        serverId: string,
        options?: DatabaseIncludeInput,
    ): Promise<Database[]> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/databases${makeIncludes(options)}`,
        );
    }
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
    public async createDatabase(
        serverId: string,
        databaseName: string,
        connectionsAllowedFrom = '%',
        options?: DatabaseIncludeInput,
    ): Promise<DatabaseAttributes> {
        return new Request(this.host, this.key).request(
            'POST',
            { database: databaseName, remote: connectionsAllowedFrom },
            'attributes',
            `/api/client/servers/${serverId}/databases${makeIncludes(options)}`,
        );
    }
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
    public async deleteDatabase(
        serverId: string,
        databaseId: string,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'DELETE',
            null,
            'Sucesfully deleted!',
            `/api/client/servers/${serverId}/databases/${databaseId}`,
        );
    }
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
    public async rotateDatabasePass(
        serverId: string,
        databaseId: string,
    ): Promise<DatabaseAttributes> {
        return new Request(this.host, this.key).request(
            'POST',
            null,
            'attributes',
            `/api/client/servers/${serverId}/databases/${databaseId}/rotate-password`,
        );
    }
}
