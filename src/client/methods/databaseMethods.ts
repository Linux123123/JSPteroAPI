import makeIncludes from '../../modules/Functions';
import Request from '../ClientRequest';
import Database, {
    DatabaseAttributes,
    DatabaseIncludeInput,
} from '../interfaces/Database';

export default class databaseMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {DatabaseIncludeInput} [options] Include information about relationships
     * @returns {Promise<Database[]>} Returns array of servers databases (Database[])
     * @example
     * ```js
     * const res = await client.getAllDatabases('c2f5a3b6') // res = Database[]
     * ```
     * @example
     * ```js
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
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {String} databaseName Database name
     * @param {string} [connectionsAllowedFrom="%"] Connections allowed from
     * @param {DatabaseIncludeInput} [options] Include information about relationships
     * @returns {Promise<Database[]>} Returns new database information (DatabaseAttributes)
     * @example
     * ```js
     * const res = await client.createDatabase('c2f5a3b6', 'Information') // res = DatabaseAttributes
     * ```
     * @example
     * ```js
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
     * @param {string} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {string} databaseId Database id
     * @returns {Promise<String>} If successful returns Sucesfully deleted!
     * @example
     * ```js
     * const res = await client.deleteDatabase('c2f5a3b6', 's5_info') // res = Sucesfully deleted!
     * ```
     * @example
     * ```js
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
     * @param {string} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {string} databaseId Database id
     * @returns {Promise<DatabaseAttributesRelationship>} Returns database information + Relationships(password)
     * @example
     * ```js
     * const res = await client.rotateDatabasePass('c2f5a3b6', 's5_info') // res = DatabaseAttributesRelationship
     * ```
     * @example
     * ```js
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
