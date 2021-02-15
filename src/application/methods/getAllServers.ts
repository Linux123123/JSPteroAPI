import Server from '../interfaces/Server';
import Request from '../ApplicationRequest';

export default async function getAllServers(): Promise<Server[]> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'getAllServers',
        'GET',
        null,
        'data',
        '/api/application/servers',
        false
    );
}
