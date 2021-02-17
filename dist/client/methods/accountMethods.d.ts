import Permissions from '../interfaces/Permissions';
export default class accountMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getAllPermissions(): Promise<Permissions>;
}
