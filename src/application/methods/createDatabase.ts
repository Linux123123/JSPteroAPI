import { DatabaseAttributes } from '../interfaces/Database';
import Request from '../ApplicationRequest';
/**
 * @param {String} name Name of the Database
 * @param {Integer} hostDBID ID of the Database Host
 * @param {Integer} internalId InternalID of the Server to create the Database
 * @param {String} allowedIp IP allowed to connect, leave "%" if you dont want to restrict
 */

export default async function createDatabase(
    name: string,
    hostDBID: number,
    internalId: number,
    allowedIp: string = '%'
): Promise<DatabaseAttributes> {
    const data = makeData(name, allowedIp, hostDBID);
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'createDatabase',
        'POST',
        data,
        'attributes',
        `/api/application/servers/${internalId}/databases`,
        true
    );
}

function makeData(name: string, allowedIp: string, hostDBID: number) {
    return {
        database: name,
        remote: allowedIp,
        host: hostDBID,
    };
}
