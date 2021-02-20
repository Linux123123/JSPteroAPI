"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
const Functions_1 = __importDefault(require("../../modules/Functions"));
class databaseMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
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
        this.getServersDatabases = async (serverId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'data', `/api/application/servers/${serverId}/databases${Functions_1.default(options)}`);
        };
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
        this.getServersDatabaseInfo = async (serverId, databaseId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/application/servers/${serverId}/databases/${databaseId}${Functions_1.default(options)}`);
        };
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
        this.createDatabase = async (name, dbHostId, serverId, allowedIp = '%', options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('POST', {
                database: name,
                remote: allowedIp,
                host: dbHostId,
            }, 'attributes', `/api/application/servers/${serverId}/databases${Functions_1.default(options)}`);
        };
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
        this.resetDatabasePassword = async (serverId, databaseId) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('POST', null, 'Successfully reset the password!', `/api/application/servers/${serverId}/databases/${databaseId}/reset-password`);
        };
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
        this.deleteDatabase = async (serverId, databaseId) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('DELETE', null, 'Successfully deleted the database!', `/api/application/servers/${serverId}/databases/${databaseId}`);
        };
    }
}
exports.default = databaseMethods;
