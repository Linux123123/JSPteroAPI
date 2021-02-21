import Permissions from '../interfaces/Permissions';
export default class accountMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getAllPermissions(): Promise<Permissions>;
}
