import Request from '../ApplicationRequest';
import makeIncludes from '../../modules/Functions';
import Database, {
    DatabaseAttributes,
    DatabaseIncludeInput,
} from '../interfaces/Database';

export default class databaseMethods {
    public constructor(private host: string, private key: string) {}
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
    public getServersDatabases = async (
        serverId: number,
        options?: DatabaseIncludeInput,
    ): Promise<Database[]> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/application/servers/${serverId}/databases${makeIncludes(
                options,
            )}`,
        );
    };
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
    public getServersDatabaseInfo = async (
        serverId: number,
        databaseId: number,
        options?: DatabaseIncludeInput,
    ): Promise<DatabaseAttributes> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/application/servers/${serverId}/databases/${databaseId}${makeIncludes(
                options,
            )}`,
        );
    };
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
    public createDatabase = async (
        name: string,
        dbHostId: number,
        serverId: number,
        allowedIp = '%',
        options?: DatabaseIncludeInput,
    ): Promise<DatabaseAttributes> => {
        return new Request(this.host, this.key).request(
            'POST',
            {
                database: name,
                remote: allowedIp,
                host: dbHostId,
            },
            'attributes',
            `/api/application/servers/${serverId}/databases${makeIncludes(
                options,
            )}`,
        );
    };
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
    public resetDatabasePassword = async (
        serverId: number,
        databaseId: number,
    ): Promise<string> => {
        return new Request(this.host, this.key).request(
            'POST',
            null,
            'Successfully reset the password!',
            `/api/application/servers/${serverId}/databases/${databaseId}/reset-password`,
        );
    };
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
    public deleteDatabase = async (
        serverId: number,
        databaseId: number,
    ): Promise<string> => {
        return new Request(this.host, this.key).request(
            'DELETE',
            null,
            'Successfully deleted the database!',
            `/api/application/servers/${serverId}/databases/${databaseId}`,
        );
    };
}
