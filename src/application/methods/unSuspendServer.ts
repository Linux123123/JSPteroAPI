import Request from '../ApplicationRequest';

/**
 * @param {String} InternalID Internal ID of the server to unsuspend
 */
export default async function unSuspendServer(
    internalID: number
): Promise<string> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'unSuspendServer',
        'POST',
        null,
        'unSuspServer',
        `/api/application/servers/${internalID}/unsuspend`,
        false
    );
}
