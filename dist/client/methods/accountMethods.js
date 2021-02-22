"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountMethods = void 0;
const ClientRequest_1 = require("../ClientRequest");
class accountMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }
    /**
     * @returns Permission data
     * @remarks Just returns all available permissions. Not that useful!
     * @example
     * ```ts
     * const res = await client.getPermissions() // res = Permissions
     * ```
     * @example
     * ```ts
     * client.getPermissions().then((res) => console.log(res)) // res = Permissions
     * ```
     */
    async getAllPermissions() {
        return new ClientRequest_1.Request(this.host, this.key).request('GET', null, 'attributes', `/api/client/permissions`);
    }
}
exports.accountMethods = accountMethods;
