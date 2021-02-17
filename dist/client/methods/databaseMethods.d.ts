import Database, { DatabaseAttributes, DatabaseAttributesRelationship } from '../interfaces/Database';
export default class databaseMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
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
    getAllDatabases(serverId: string): Promise<Database[]>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {String} databaseName Database name
     * @param {string} [connectionsAllowedFrom="%"] Connections allowed from
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
    createDatabase(serverId: string, databaseName: string, connectionsAllowedFrom?: string): Promise<DatabaseAttributes>;
    /**
     * @param {string} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {string} databaseName Database name (e.g. s5_info)
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
    deleteDatabase(serverId: string, databaseName: string): Promise<string>;
    /**
     * @param {string} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {string} databaseName Database name (e.g. s5_info)
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
    rotateDatabasePass(serverId: string, databaseName: string): Promise<DatabaseAttributesRelationship>;
}
