import Database, { DatabaseAttributes, DatabaseIncludeInput } from '../interfaces/Database';
export default class databaseMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param {number} serverId The server ID to get the databases from
     * @param {DatabaseIncludeInput} [options] Include information about server relationships
     * @returns {Promise<Database[]>} Array of databases
     * @example
     * ```js
     * const res = await app.getServersDatabase(1) // res = Database[]
     * ```
     * @example
     * ```js
     * app.getServersDatabase(1).then((res) => console.log(res)) // res = Database[]
     * ```
     */
    getServersDatabases: (serverId: number, options?: DatabaseIncludeInput | undefined) => Promise<Database[]>;
    /**
     * @param {number} serverId The server ID to get the database from
     * @param {number} databaseId The ID of the database
     * @param {DatabaseIncludeInput} [options] Include information about server relationships
     * @returns {Promise<DatabaseAttributes>} Database information
     * @example
     * ```js
     * const res = await app.getServersDatabaseInfo(1, 1) // res = DatabaseAttributes
     * ```
     * @example
     * ```js
     * app.getServersDatabaseInfo(1, 2).then((res) => console.log(res)) // res = DatabaseAttributes
     * ```
     */
    getServersDatabaseInfo: (serverId: number, databaseId: number, options?: DatabaseIncludeInput | undefined) => Promise<DatabaseAttributes>;
    /**
     * @param {string} name Name of the Database
     * @param {number} dbHostId ID of the Database Host
     * @param {number} serverId The server ID to create the database in
     * @param {string} allowedIp IP allowed to connect, leave "%" if you dont want to restrict
     * @param {DatabaseIncludeInput} [options] Include information about server relationships
     * @returns {DatabaseAttributes} Information about the new database
     * @example
     * ```js
     * const res = await app.createDatabase('DATABASE_1', 1, 1) // res = DatabaseAttributes
     * ```
     * @example
     * ```js
     * app.createDatabase('DATABASE_1', 1, 1).then((res) => console.log(res)) // res = DatabaseAttributes
     * ```
     */
    createDatabase: (name: string, dbHostId: number, serverId: number, allowedIp?: string, options?: DatabaseIncludeInput | undefined) => Promise<DatabaseAttributes>;
    /**
     * @param {number} serverId The server ID to get the database from
     * @param {number} databaseId The ID of the database
     * @returns {Promise<string>} If successful returns Successfully reset the password!
     * @example
     * ```js
     * const res = await app.resetDatabasePassword(1, 1) // res = Successfully reset the password!
     * ```
     * @example
     * ```js
     * app.resetDatabasePassword(1, 2).then((res) => console.log(res)) // res = Successfully reset the password!
     * ```
     */
    resetDatabasePassword: (serverId: number, databaseId: number) => Promise<string>;
    /**
     * @param {number} serverId The server ID to delete the database in
     * @param {number} databaseId The ID of the database
     * @returns {Promise<string>} If successful returns Successfully deleted the database!
     * @example
     * ```js
     * const res = await app.resetDatabasePassword(1, 1) // res = Successfully deleted the database!
     * ```
     * @example
     * ```js
     * app.resetDatabasePassword(1, 2).then((res) => console.log(res)) // res = Successfully deleted the database!
     * ```
     */
    deleteDatabase: (serverId: number, databaseId: number) => Promise<string>;
}
