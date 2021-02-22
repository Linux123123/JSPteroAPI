"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseMethods = void 0;
const Functions_1 = require("../../modules/Functions");
const ClientRequest_1 = require("../ClientRequest");
class databaseMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }
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
    async getAllDatabases(serverId, options) {
        return new ClientRequest_1.Request(this.host, this.key).request('GET', null, 'data', `/api/client/servers/${serverId}/databases${Functions_1.makeIncludes(options)}`);
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
    async createDatabase(serverId, databaseName, connectionsAllowedFrom = '%', options) {
        return new ClientRequest_1.Request(this.host, this.key).request('POST', { database: databaseName, remote: connectionsAllowedFrom }, 'attributes', `/api/client/servers/${serverId}/databases${Functions_1.makeIncludes(options)}`);
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
    async deleteDatabase(serverId, databaseId) {
        return new ClientRequest_1.Request(this.host, this.key).request('DELETE', null, 'Sucesfully deleted!', `/api/client/servers/${serverId}/databases/${databaseId}`);
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
    async rotateDatabasePass(serverId, databaseId) {
        return new ClientRequest_1.Request(this.host, this.key).request('POST', null, 'attributes', `/api/client/servers/${serverId}/databases/${databaseId}/rotate-password`);
    }
}
exports.databaseMethods = databaseMethods;
