import Request from '../ClientRequest';
import { DatabaseAttributes } from '../interfaces/Database';

/**
 * @param {String} serverId ID of the server to create database to
 * @param {String} databaseName Database name
 * @param {(string|string[])} [connectionsAllowedFrom='%'] Connections allowed from
 */
export default async function createDatabase(
    serverId: string,
    databaseName: string,
    connectionsAllowedFrom: string | string[] = '%'
): Promise<DatabaseAttributes> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    const data = { database: databaseName, remote: connectionsAllowedFrom };
    return Req.request(
        'createDatabase',
        'POST',
        data,
        'attributes',
        `/api/client/servers/${serverId}/databases`,
        true
    );
}
