import Server, { ServerAttributes, ServerIncludeInput } from '../interfaces/Server';
import ServerResources from '../interfaces/ServerResources';
export default class serverMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param {ServerIncludeInput} [options] Include information about server relationships
     * @returns {Promise<Server[]} An Array of servers
     * @example
     * ```js
     * const res = await client.getAllServers() // res = Server[]
     * ```
     * @example
     * ```js
     * client.getAllServers().then((res) => console.log(res)) // res = Server[]
     * ```
     */
    getAllServers(options?: ServerIncludeInput): Promise<Server[]>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @param {ServerIncludeInput} [options] Include information about server relationships
     * @returns {Promise<ServerAttributes>} Server information
     * @example
     * ```js
     * const res = await client.getServerInfo('c2f5a3b6') // res = ServerAttributes
     * ```
     * @example
     * ```js
     * client.getServerInfo('c2f5a3b6').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    getServerInfo(serverId: string, options?: ServerIncludeInput): Promise<ServerAttributes>;
    /**
     * @param {String} serverId ID of the server to get (In the settings tab of server/in link)
     * @returns {Promise<ServerResources>} Server resource usage object
     * @example
     * ```js
     * const res = await client.getServerResources('c2f5a3b6') // res = ServerResources
     * ```
     * @example
     * ```js
     * client.getServerResources('c2f5a3b6').then((res) => console.log(res)) // res = ServerResources
     * ```
     */
    getServerResources(serverId: string): Promise<ServerResources>;
    /**
     * @param {String} serverId ID of the server to send a command to
     * @param {String} command Command to send
     * @returns {Promise<String>} If successful returns Successfuly sent the command!
     * @example
     * ```js
     * const res = await client.sendCommand('c2f5a3b6', 'give Linux123123 star') // res = Successfuly sent the command!
     * ```
     * @example
     * ```js
     * client.sendCommand('c2f5a3b6', 'give Linux123123 star').then((res) => console.log(res)) // res = Successfuly sent the command!
     * ```
     */
    sendCommand(serverId: string, command: string): Promise<string>;
    /**
     * @param {String} serverId ID of the server to send a command to
     * @param {String} action start / stop / restart / kill
     * @returns {Promise<String>} If successful returns Successfuly set power state!
     * @example
     * ```js
     * const res = await client.setPowerState('c2f5a3b6', 'start') // res = Successfuly set power state!
     * ```
     * @example
     * ```js
     * client.setPowerState('c2f5a3b6', 'kill).then((res) => console.log(res)) // res = Successfuly set power state!
     * ```
     */
    setPowerState(serverId: string, action: string): Promise<string>;
}
