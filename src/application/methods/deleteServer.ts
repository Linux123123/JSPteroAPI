import Request from '../ApplicationRequest';

/**
 * @param {Number} internalId Internal ID of the server to delete
 */
export default async function deleteServer(
    internalId: number
): Promise<string> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'deleteServer',
        'DELETE',
        null,
        'delServer',
        `/api/application/servers/${internalId}`,
        false
    );
}
