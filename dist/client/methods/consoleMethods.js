"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRequest_1 = __importDefault(require("../ClientRequest"));
class consoleMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @returns {Promise<WebsocketAuthData>} Data to connect to a websocket
     * @example
     * ```js
     * const res = await client.getWebsocketAuthData('c2f5a3b6') // res = WebsocketAuthData
     * ```
     * @example
     * ```js
     * client.getWebsocketAuthData('c2f5a3b6').then((res) => console.log(res)) // res = WebsocketAuthData
     * ```
     */
    async getWebsocketAuthData(serverId) {
        return new ClientRequest_1.default(this.host, this.key).request('getWebsocketAuthData', 'GET', null, 'data', `/api/client/servers/${serverId}/websocket`);
    }
}
exports.default = consoleMethods;
