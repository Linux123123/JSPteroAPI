import Node from '../interfaces/Node';
import Request from '../ApplicationRequest';

export default async function getAllNodes(): Promise<Node[]> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'getAllNodes',
        'GET',
        null,
        'data',
        '/api/application/nodes',
        false
    );
}
