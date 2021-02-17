import WebsocketAuthData from '../interfaces/WebsocketAuthData';
export default class consoleMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getWebsocketAuthData(serverId: string): Promise<WebsocketAuthData>;
}
