import Request from '../ClientRequest';
import { ServerAttributes } from '../interfaces/Server';

/**
 * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
 */
export default async function getServerInfo(
    serverId: string
): Promise<ServerAttributes> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'getServerInfo',
        'GET',
        null,
        'attributes',
        `/api/client/servers/${serverId}`,
        false
    );
}
