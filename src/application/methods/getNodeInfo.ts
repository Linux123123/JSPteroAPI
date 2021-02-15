import { NodeAttributes } from '../interfaces/Node';
import Request from '../ApplicationRequest';

/**
 * @param {Number} NodeID The node ID to get the details of.
 */
export default async function getNode(NodeID: number): Promise<NodeAttributes> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'getNodeInfo',
        'GET',
        null,
        'attributes',
        `/api/application/nodes/${NodeID}`,
        false
    );
}
