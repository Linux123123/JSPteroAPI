import Request from '../ApplicationRequest';

/**
 * @param {Number} nodeId The node ID to delete
 */
export default async function deleteNode(nodeId: number): Promise<string> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'deleteNode',
        'DELETE',
        null,
        'delNode',
        `/api/application/nodes/${nodeId}`,
        false
    );
}

