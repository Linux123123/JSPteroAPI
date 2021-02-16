import { ServerAttributes } from '../interfaces/Server';
/**
 * @param {Number} ServerID The server ID to get the details of.
 */
export default function getServerInfo(ServerID: number): Promise<ServerAttributes>;
