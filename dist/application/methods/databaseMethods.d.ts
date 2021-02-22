import { Database, DatabaseAttributes, DatabaseIncludeInput } from '../interfaces/Database';
export declare class databaseMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param serverId - The server ID to get the databases from
     * @param options - Include information about server relationships
     * @returns Array of databases
     * @example
     * ```ts
     * const res = await app.getServersDatabase(1) // res = Database[]
     * ```
     * @example
     * ```ts
     * app.getServersDatabase(1).then((res) => console.log(res)) // res = Database[]
     * ```
     */
    getServersDatabases: (serverId: number, options?: DatabaseIncludeInput | undefined) => Promise<Database[]>;
    /**
     * @param serverId - The server ID to get the database from
     * @param databaseId - The ID of the database
     * @param options - Include information about server relationships
     * @returns Database information
     * @example
     * ```ts
     * const res = await app.getServersDatabaseInfo(1, 1) // res = DatabaseAttributes
     * ```
     * @example
     * ```ts
     * app.getServersDatabaseInfo(1, 2).then((res) => console.log(res)) // res = DatabaseAttributes
     * ```
     */
    getServersDatabaseInfo: (serverId: number, databaseId: number, options?: DatabaseIncludeInput | undefined) => Promise<DatabaseAttributes>;
    /**
     * @param name - Name of the Database
     * @param dbHostId - ID of the Database Host
     * @param serverId - The server ID to create the database in
     * @param allowedIp - IP allowed to connect, leave "%" if you dont want to restrict
     * @param options - Include information about server relationships
     * @returns Information about the new database
     * @example
     * ```ts
     * const res = await app.createDatabase('DATABASE_1', 1, 1) // res = DatabaseAttributes
     * ```
     * @example
     * ```ts
     * app.createDatabase('DATABASE_1', 1, 1).then((res) => console.log(res)) // res = DatabaseAttributes
     * ```
     */
    createDatabase: (name: string, dbHostId: number, serverId: number, allowedIp?: string, options?: DatabaseIncludeInput | undefined) => Promise<DatabaseAttributes>;
    /**
     * @param serverId - The server ID to get the database from
     * @param databaseId - The ID of the database
     * @returns If successful returns Successfully reset the password!
     * @example
     * ```ts
     * const res = await app.resetDatabasePassword(1, 1) // res = Successfully reset the password!
     * ```
     * @example
     * ```ts
     * app.resetDatabasePassword(1, 2).then((res) => console.log(res)) // res = Successfully reset the password!
     * ```
     */
    resetDatabasePassword: (serverId: number, databaseId: number) => Promise<string>;
    /**
     * @param serverId - The server ID to delete the database in
     * @param databaseId - The ID of the database
     * @returns If successful returns Successfully deleted the database!
     * @example
     * ```ts
     * const res = await app.resetDatabasePassword(1, 1) // res = Successfully deleted the database!
     * ```
     * @example
     * ```ts
     * app.resetDatabasePassword(1, 2).then((res) => console.log(res)) // res = Successfully deleted the database!
     * ```
     */
    deleteDatabase: (serverId: number, databaseId: number) => Promise<string>;
}
