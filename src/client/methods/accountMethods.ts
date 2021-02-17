import Request from '../ClientRequest';
import Permissions from '../interfaces/Permissions';

export default class accountMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @returns {Promise<Permissions>} Permission data
     * @warning Just returns all available permissions. Not that useful!
     * @example
     * ```js
     * const res = await client.getPermissions() // res = Permissions
     * ```
     * @example
     * ```js
     * client.getPermissions().then((res) => console.log(res)) // res = Permissions
     * ```
     */
    public async getAllPermissions(): Promise<Permissions> {
        return new Request(this.host, this.key).request(
            'getAllPermissions',
            'GET',
            null,
            'attributes',
            `/api/client/permissions`,
        );
    }
}
