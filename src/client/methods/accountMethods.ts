import { Request } from '../ClientRequest';
import { Permissions } from '../interfaces/Permissions';

export class accountMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @returns Permission data
     * @remarks Just returns all available permissions. Not that useful!
     * @example
     * ```ts
     * const res = await client.getPermissions() // res = Permissions
     * ```
     * @example
     * ```ts
     * client.getPermissions().then((res) => console.log(res)) // res = Permissions
     * ```
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
