import makeIncludes from '../../modules/Functions';
import Request from '../ClientRequest';
import Server, {
    ServerAttributes,
    ServerIncludeInput,
} from '../interfaces/Server';
import ServerResources from '../interfaces/ServerResources';

export default class serverMethods {
    public constructor(private host: string, private key: string) {}
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
    public async getAllServers(
        options?: ServerIncludeInput,
    ): Promise<Server[]> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/client${makeIncludes(options)}`,
        );
    }
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
    public async getServerInfo(
        serverId: string,
        options?: ServerIncludeInput,
    ): Promise<ServerAttributes> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/client/servers/${serverId}${makeIncludes(options)}`,
        );
    }
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
    public async getServerResources(
        serverId: string,
    ): Promise<ServerResources> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/client/servers/${serverId}/resources`,
        );
    }
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
    public async sendCommand(
        serverId: string,
        command: string,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'POST',
            { command: command },
            'Successfuly sent the command!',
            `/api/client/servers/${serverId}/command`,
        );
    }
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
    public async setPowerState(
        serverId: string,
        action: string,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'POST',
            { signal: action },
            'Successfuly set power state!',
            `/api/client/servers/${serverId}/power`,
        );
    }
}
