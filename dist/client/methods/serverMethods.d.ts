import { Server, ServerAttributes, ServerIncludeInput } from '../interfaces/Server';
import { ServerResources } from '../interfaces/ServerResources';
export declare class serverMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param options - Include information about server relationships
     * @returns An Array of servers
     * @example
     * ```ts
     * const res = await client.getAllServers() // res = Server[]
     * ```
     * @example
     * ```ts
     * client.getAllServers().then((res) => console.log(res)) // res = Server[]
     * ```
     */
    getAllServers(options?: ServerIncludeInput): Promise<Server[]>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param options - Include information about server relationships
     * @returns Server information
     * @example
     * ```ts
     * const res = await client.getServerInfo('c2f5a3b6') // res = ServerAttributes
     * ```
     * @example
     * ```ts
     * client.getServerInfo('c2f5a3b6').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    getServerInfo(serverId: string, options?: ServerIncludeInput): Promise<ServerAttributes>;
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @returns Server resource usage object
     * @example
     * ```ts
     * const res = await client.getServerResources('c2f5a3b6') // res = ServerResources
     * ```
     * @example
     * ```ts
     * client.getServerResources('c2f5a3b6').then((res) => console.log(res)) // res = ServerResources
     * ```
     */
    getServerResources(serverId: string): Promise<ServerResources>;
    /**
     * @param serverId - ID of the server to send a command to
     * @param command - Command to send
     * @returns If successful returns Successfuly sent the command!
     * @example
     * ```ts
     * const res = await client.sendCommand('c2f5a3b6', 'give Linux123123 star') // res = Successfuly sent the command!
     * ```
     * @example
     * ```ts
     * client.sendCommand('c2f5a3b6', 'give Linux123123 star').then((res) => console.log(res)) // res = Successfuly sent the command!
     * ```
     */
    sendCommand(serverId: string, command: string): Promise<string>;
    /**
     * @param serverId - ID of the server to send a command to
     * @param action - start / stop / restart / kill
     * @returns If successful returns Successfuly set power state!
     * @example
     * ```ts
     * const res = await client.setPowerState('c2f5a3b6', 'start') // res = Successfuly set power state!
     * ```
     * @example
     * ```ts
     * client.setPowerState('c2f5a3b6', 'kill).then((res) => console.log(res)) // res = Successfuly set power state!
     * ```
     */
    setPowerState(serverId: string, action: string): Promise<string>;
}
