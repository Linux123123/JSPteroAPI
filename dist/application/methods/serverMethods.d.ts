import { Server, ServerAttributes, ServerEnvironment, ServerIncludesInput } from '../interfaces/Server';
export declare class serverMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param options - Include information about server relationships
     * @returns Array of server
     * @example
     * ```ts
     * const res = await app.getAllServers() // res = Server[]
     * ```
     * @example
     * ```ts
     * app.getAllServers().then((res) => console.log(res)) // res = Server[]
     * ```
     */
    getAllServers: (options?: ServerIncludesInput | undefined) => Promise<Server[]>;
    /**
     * @param serverId - The server ID to get the details of.
     * @param options - Include information about server relationships
     * @returns Server information
     * @example
     * ```ts
     * const res = await app.getServerInfo(1) // res = ServerAttributes
     * ```
     * @example
     * ```ts
     * app.getServerInfo(1).then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    getServerInfo: (serverId: number, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param serverId - The external server ID to get the details of.
     * @param options - Include information about server relationships
     * @returns Server information
     * @example
     * ```ts
     * const res = await app.getServerInfoByExtId('MC_SERVER') // res = ServerAttributes
     * ```
     * @example
     * ```ts
     * app.getServerInfoByExtId('GAMER_SERVER').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    getServerInfoByExtId: (serverId: string, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param serverId - The server ID to get the details of.
     * @param name - New server name
     * @param userId - ID of the new server owner
     * @param externalId - Set the new external ID
     * @param description - Set new description
     * @param options - Include information about server relationships
     * @returns Server information
     * @example
     * ```ts
     * const res = await app.editServerDetails(1, 'Mc server') // res = ServerAttributes
     * ```
     * @example
     * ```ts
     * app.editServerDetails(1, undefined, undefined, 'MC_SERVER').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    editServerDetails: (serverId: number, name?: string | undefined, userId?: number | undefined, externalId?: string | undefined, description?: string | undefined, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param serverId - The server ID to get the details of.
     * @param allocationId - The new primary allocation id
     * @param addAllocations - Array of new allocation ids to add
     * @param removeAllocations - Array of allocation ids to remove from server
     * @param cpu - Amount of cpu resources to give (1 core = 100) (0 unlimited)
     * @param memory - Amount of memory resources to give (1024 = 1GB) (0 unlimited)
     * @param disk - Amount of disk space to give (1024 = 1GB) (0 unlimited)
     * @param databases - Amount databases server can create
     * @param allocations - Amount allocations server can create
     * @param backups - Amount backups server can create
     * @param swap - Amount swap resources to give (1024 = 1GB) (-1 unlimited)
     * @param io - ADVANCED IO performance of the host server (between 10 and 1000)
     * @param threads - ADVANCED Threads for the server to use
     * @param options - Include information about server relationships
     * @returns Server information
     * @example
     * ```ts
     * const res = await app.editServerBuild(1, undefined, undefined, [5, 6]) // res = ServerAttributes
     * ```
     * @example
     * ```ts
     * app.editServerBuild(1, undefined, [1, 3]).then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    editServerBuild: (serverId: number, allocationId?: number | undefined, addAllocations?: number[] | undefined, removeAllocations?: number[] | undefined, cpu?: number | undefined, memory?: number | undefined, disk?: number | undefined, databases?: number | undefined, allocations?: number | undefined, backups?: number | undefined, swap?: number | undefined, io?: number | undefined, threads?: string | undefined, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param serverId - The external server ID to get the details of.
     * @param startup - The new startup command
     * @param environment - Servers environment variables. REQUIRED!
     * @param egg - The new egg you want to use
     * @param image - The new docker image you want to use
     * @param skip_scripts - Skip install script boolean (FALSE by default!)
     * @param options - Include information about server relationships
     * @returns Server information
     * @example
     * ```ts
     * const res = await app.editServerStartup(1, 'node index.js') // res = ServerAttributes
     * ```
     * @example
     * ```ts
     * app.editServerStartup(1, 'node index.js').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    editServerStartup: (serverId: number, startup?: string | undefined, environment?: ServerEnvironment | undefined, egg?: number | undefined, image?: string | undefined, skip_scripts?: boolean, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param name  -Name of server to create
     * @param ownerId - User ID of who should own this server
     * @param description - Description of server
     * @param nestId - ID of the nest to use when making a server
     * @param eggId - Egg ID to use when installing the server
     * @param environment - Servers environment variables. Some are REQUIRED! If there is a default value and none is provided default is used!
     * @param cpu - Amount of cpu resources to give (1 core = 100) (0 unlimited)
     * @param ram - Amount of memory resources to give (1024 = 1GB) (0 unlimited)
     * @param disk - Amount of disk space to give (1024 = 1GB) (0 unlimited)
     * @param amountOfDatabases - The max amount of databases a server can use
     * @param amountOfAllocations - The max amount of allocation(s) a server can use
     * @param amountOfBackups - The max amount of backups a server can use
     * @param startupCmd - The command to use when starting this server
     * @param dockerImage - The image to use from Docker
     * @param swap - The amount of Swap the server has
     * @param io - Set this to 500.
     * @param options - Include information about server relationships
     * @returns Returns the created server object
     * @example
     * ```ts
     * const res = await app.createServer('BUNGEE', 1, 'BUNGEE SERVER', 1, 1) // res = ServerAttributes
     * ```
     * @example
     * ```ts
     * app.createServer('BUNGEE', 1, 'BUNGEE SERVER', 1, 1).then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    createServer: (name: string, ownerId: number, description: string, nestId: number, eggId: number, environment?: ServerEnvironment | undefined, cpu?: number, ram?: number, disk?: number, amountOfDatabases?: number, amountOfAllocations?: number, amountOfBackups?: number, startupCmd?: string | undefined, dockerImage?: string | undefined, swap?: number, io?: number, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param internalId - Internal ID of the server to delete
     * @param forceDelete - Boolean if forcefully delete a server
     * @returns If successful returns Successfully deleted!
     * @example
     * ```ts
     * const res = await app.deleteServer(1) // res = Successfully deleted!
     * ```
     * @example
     * ```ts
     * app.deleteServer(1, true).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    deleteServer(internalId: number, forceDelete?: boolean): Promise<string>;
    /**
     * @param internalId - Internal ID of the server to suspend
     * @returns If successful returns Successfully suspended!
     * @example
     * ```ts
     * const res = await app.suspendServer(1) // res = Successfully suspended!
     * ```
     * @example
     * ```ts
     * app.suspendServer(1).then((res) => console.log(res)) // res = Successfully suspended!
     * ```
     */
    suspendServer(internalID: number): Promise<string>;
    /**
     * @param internalId - Internal ID of the server to suspend
     * @returns If successful returns Successfully unsuspended!
     * @example
     * ```ts
     * const res = await app.unSuspendServer(1) // res = Successfully unsuspended!
     * ```
     * @example
     * ```ts
     * app.unSuspendServer(1).then((res) => console.log(res)) // res = Successfully unsuspended!
     * ```
     */
    unSuspendServer(internalID: number): Promise<string>;
    /**
     * @param internalId - Internal ID of the server to reinstall
     * @returns If successful returns Successfully reinstalled!
     * @example
     * ```ts
     * const res = await app.reinstallServer(1) // res = Successfully reinstalled!
     * ```
     * @example
     * ```ts
     * app.reinstallServer(1).then((res) => console.log(res)) // res = Successfully reinstalled!
     * ```
     */
    reinstallServer(internalID: number): Promise<string>;
}
