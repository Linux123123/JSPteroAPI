"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseMethods = void 0;
const ApplicationRequest_1 = require("../ApplicationRequest");
const Functions_1 = require("../../modules/Functions");
class databaseMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
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
        this.getServersDatabases = async (serverId, options) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('GET', null, 'data', `/api/application/servers/${serverId}/databases${Functions_1.makeIncludes(options)}`);
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
        this.getServersDatabaseInfo = async (serverId, databaseId, options) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('GET', null, 'attributes', `/api/application/servers/${serverId}/databases/${databaseId}${Functions_1.makeIncludes(options)}`);
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
        this.createDatabase = async (name, dbHostId, serverId, allowedIp = '%', options) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('POST', {
                database: name,
                remote: allowedIp,
                host: dbHostId,
            }, 'attributes', `/api/application/servers/${serverId}/databases${Functions_1.makeIncludes(options)}`);
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
        this.resetDatabasePassword = async (serverId, databaseId) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('POST', null, 'Successfully reset the password!', `/api/application/servers/${serverId}/databases/${databaseId}/reset-password`);
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
        this.deleteDatabase = async (serverId, databaseId) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('DELETE', null, 'Successfully deleted the database!', `/api/application/servers/${serverId}/databases/${databaseId}`);
        };
    }
}
exports.databaseMethods = databaseMethods;
