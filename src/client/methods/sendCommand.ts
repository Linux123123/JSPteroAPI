import Request from '../ClientRequest';

/**
 * @param {String} serverId ID of the server to send a command to
 * @param {String} command Command to send
 */
export default async function sendCommand(
    serverId: string,
    command: string
): Promise<string> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    const data = { command: command };
    return Req.request(
        'sendCommand',
        'POST',
        data,
        'sendCommand',
        `/api/client/servers/${serverId}/command`,
        true
    );
}
