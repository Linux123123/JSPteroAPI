import Request from '../ClientRequest';
import Permissions from '../interfaces/Permissions';

/**
 * @yields {Object} Permissions Object
 */
export default async function getPermissions(): Promise<Permissions> {
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'getPermissions',
        'GET',
        null,
        'attributes',
        `/api/client/permissions`,
        false
    );
}
