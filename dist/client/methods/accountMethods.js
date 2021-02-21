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
        return new ClientRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/client/permissions`);
    }
}
exports.default = accountMethods;
