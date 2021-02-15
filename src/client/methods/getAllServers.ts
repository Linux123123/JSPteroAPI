import Request from '../ClientRequest';
import Server from '../interfaces/Server';

/**
 * @yields A Array of servers a application key has access to
 */
export default async function getAllServers(): Promise<Server[]> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'getAllServer',
        'GET',
        null,
        'data',
        '/api/client',
        false
    );
}
