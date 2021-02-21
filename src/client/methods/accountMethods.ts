import Request from '../ClientRequest';
import Permissions from '../interfaces/Permissions';
export default class accountMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @example
     *   const res = await client.getPermissions(); // res = Permissions
     *
     * @example
     *   client.getPermissions().then((res) => console.log(res)); // res = Permissions
     *
     * @returns {Promise<Permissions>} Permission data
     * @warning Just returns all available permissions. Not that useful!
     */
    public async getAllPermissions(): Promise<Permissions> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/client/permissions`,
        );
    }
}
