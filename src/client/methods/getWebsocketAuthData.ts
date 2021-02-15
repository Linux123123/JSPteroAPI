import Request from '../ClientRequest';
import WebsocketAuthData from '../interfaces/WebsocketAuthData';

/**
 * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
 */
export default async function getWebsocketAuthData(
    serverId: string
): Promise<WebsocketAuthData> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'getWebsocketAuthData',
        'GET',
        null,
        'data',
        `/api/client/servers/${serverId}/websocket`,
        false
    );
}
