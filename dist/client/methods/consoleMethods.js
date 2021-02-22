"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleMethods = void 0;
const ClientRequest_1 = require("../ClientRequest");
class consoleMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @returns Data to connect to a websocket
     * @example
     * ```ts
     * const res = await client.getWebsocketAuthData('c2f5a3b6') // res = WebsocketAuthData
     * ```
     * @example
     * ```ts
     * client.getWebsocketAuthData('c2f5a3b6').then((res) => console.log(res)) // res = WebsocketAuthData
     * ```
     */
    async getWebsocketAuthData(serverId) {
        return new ClientRequest_1.Request(this.host, this.key).request('GET', null, 'data', `/api/client/servers/${serverId}/websocket`);
    }
}
exports.consoleMethods = consoleMethods;
