import Request from '../ClientRequest';
import Database from '../interfaces/Database';

/**
 * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
 */
export default async function getAllDatabases(
    serverId: string
): Promise<Database[]> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'getAllDatabases',
        'GET',
        null,
        'data',
        `/api/client/servers/${serverId}/databases`,
        false
    );
}
