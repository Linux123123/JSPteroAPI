import Request from '../ClientRequest';
import WebsocketAuthData from '../interfaces/WebsocketAuthData';

export default class consoleMethods {
    public constructor(private host: string, private key: string) {}
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
    public async getWebsocketAuthData(
        serverId: string,
    ): Promise<WebsocketAuthData> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/websocket`,
        );
    }
}
