import Request from '../ApplicationRequest';

/**
 * @param {String} internalID Internal ID of the server to suspend
 */
export default async function suspendServer(
    internalID: number
): Promise<String> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'suspendServer',
        'POST',
        null,
        'suspServer',
        `/api/application/servers/${internalID}/suspend`,
        false
    );
}
