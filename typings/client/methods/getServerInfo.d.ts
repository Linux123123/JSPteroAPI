import { ServerAttributes } from '../interfaces/Server';
/**
 * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
 */
export default function getServerInfo(serverId: string): Promise<ServerAttributes>;
