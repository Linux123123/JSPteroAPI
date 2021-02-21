import Database, { DatabaseAttributes, DatabaseIncludeInput } from '../interfaces/Database';
export default class databaseMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getAllDatabases(serverId: string, options?: DatabaseIncludeInput): Promise<Database[]>;
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
    createDatabase(serverId: string, databaseName: string, connectionsAllowedFrom?: string, options?: DatabaseIncludeInput): Promise<DatabaseAttributes>;
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
    deleteDatabase(serverId: string, databaseId: string): Promise<string>;
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
    rotateDatabasePass(serverId: string, databaseId: string): Promise<DatabaseAttributes>;
}
