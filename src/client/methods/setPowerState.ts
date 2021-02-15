import Request from '../ClientRequest';

/**
 * @param {String} serverId ID of the server to send a command to
 * @param {String} action start / stop / restart / kill
 */
export default async function setPowerState(
    serverId: string,
    action: string
): Promise<string> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    const data = { signal: action };
    return Req.request(
        'setPowerState',
        'POST',
        data,
        'setPowState',
        `/api/client/servers/${serverId}/power`,
        true
    );
}
