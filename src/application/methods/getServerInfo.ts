import { ServerAttributes } from '../interfaces/Server';
import Request from '../ApplicationRequest';

/**
 * @param {Number} ServerID The server ID to get the details of.
 */
export default async function getServerInfo(
    ServerID: number
): Promise<ServerAttributes> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'getServerInfo',
        'GET',
        null,
        'attributes',
        `/api/application/servers/${ServerID}`,
        false
    );
}
