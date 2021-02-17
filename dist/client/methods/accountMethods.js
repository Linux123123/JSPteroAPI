"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRequest_1 = __importDefault(require("../ClientRequest"));
class accountMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }
    /**
     * @returns {Promise<Permissions>} Permission data
     * @warning Just returns all available permissions. Not that useful!
     * @example
     * ```js
     * const res = await client.getPermissions() // res = Permissions
     * ```
     * @example
     * ```js
     * client.getPermissions().then((res) => console.log(res)) // res = Permissions
     * ```
     */
    async getAllPermissions() {
        return new ClientRequest_1.default(this.host, this.key).request('getAllPermissions', 'GET', null, 'attributes', `/api/client/permissions`);
    }
}
exports.default = accountMethods;
