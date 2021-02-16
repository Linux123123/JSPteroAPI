import WebsocketAuthData from '../interfaces/WebsocketAuthData';
/**
 * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
 */
export default function getWebsocketAuthData(serverId: string): Promise<WebsocketAuthData>;
