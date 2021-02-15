import Request from '../ClientRequest';
import ServerResources from '../interfaces/ServerResources';

/**
 * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
 */
export default async function getServerResources(
    serverId: string
): Promise<ServerResources> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'getServerResources',
        'GET',
        null,
        'attributes',
        `/api/client/servers/${serverId}/resources`,
        false
    );
}
