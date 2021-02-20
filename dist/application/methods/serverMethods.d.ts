import Server, { ServerAttributes, ServerEnvironment, ServerIncludesInput } from '../interfaces/Server';
export default class serverMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param {ServerIncludesInput} [options] Include information about server relationships
     * @returns {Promise<Server[]>} Array of server
     * @example
     * ```js
     * const res = await app.getAllServers() // res = Server[]
     * ```
     * @example
     * ```js
     * app.getAllServers().then((res) => console.log(res)) // res = Server[]
     * ```
     */
    getAllServers: (options?: ServerIncludesInput | undefined) => Promise<Server[]>;
    /**
     * @param {number} serverId The server ID to get the details of.
     * @param {ServerIncludesInput} [options] Include information about server relationships
     * @returns {Promise<ServerAttributes>} Server information
     * @example
     * ```js
     * const res = await app.getServerInfo(1) // res = ServerAttributes
     * ```
     * @example
     * ```js
     * app.getServerInfo(1).then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    getServerInfo: (serverId: number, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param {string} serverId The external server ID to get the details of.
     * @param {ServerIncludesInput} [options] Include information about server relationships
     * @returns {Promise<ServerAttributes>} Server information
     * @example
     * ```js
     * const res = await app.getServerInfoByExtId('MC_SERVER') // res = ServerAttributes
     * ```
     * @example
     * ```js
     * app.getServerInfoByExtId('GAMER_SERVER').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    getServerInfoByExtId: (serverId: string, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param {number} serverId The server ID to get the details of.
     * @param {string} [name] New server name
     * @param {string} [userId] ID of the new server owner
     * @param {string} [externalId] Set the new external ID
     * @param {string} [description] Set new description
     * @param {ServerIncludesInput} [options] Include information about server relationships
     * @returns {Promise<ServerAttributes>} Server information
     * @example
     * ```js
     * const res = await app.editServerDetails(1, 'Mc server') // res = ServerAttributes
     * ```
     * @example
     * ```js
     * app.editServerDetails(1, undefined, undefined, 'MC_SERVER').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    editServerDetails: (serverId: number, name?: string | undefined, userId?: number | undefined, externalId?: string | undefined, description?: string | undefined, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param {number} serverId The server ID to get the details of.
     * @param {number} [allocationId] The new primary allocation id
     * @param {number[]} [addAllocations] Array of new allocation ids to add
     * @param {number[]} [removeAllocations] Array of allocation ids to remove from server
     * @param {number} [cpu] Amount of cpu resources to give (1 core = 100) (0 unlimited)
     * @param {number} [memory] Amount of memory resources to give (1024 = 1GB) (0 unlimited)
     * @param {number} [disk] Amount of disk space to give (1024 = 1GB) (0 unlimited)
     * @param {number} [databases] Amount databases server can create
     * @param {number} [allocations] Amount allocations server can create
     * @param {number} [backups] Amount backups server can create
     * @param {number} [swap] Amount swap resources to give (1024 = 1GB) (-1 unlimited)
     * @param {number} [io] ADVANCED IO performance of the host server (between 10 and 1000)
     * @param {string} [threads] ADVANCED Threads for the server to use
     * @param {ServerIncludesInput} [options] Include information about server relationships
     * @returns {Promise<ServerAttributes>} Server information
     * @example
     * ```js
     * const res = await app.editServerBuild(1, undefined, undefined, [5, 6]) // res = ServerAttributes
     * ```
     * @example
     * ```js
     * app.editServerBuild(1, undefined, [1, 3]).then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    editServerBuild: (serverId: number, allocationId?: number | undefined, addAllocations?: number[] | undefined, removeAllocations?: number[] | undefined, cpu?: number | undefined, memory?: number | undefined, disk?: number | undefined, databases?: number | undefined, allocations?: number | undefined, backups?: number | undefined, swap?: number | undefined, io?: number | undefined, threads?: string | undefined, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param {number} serverId The external server ID to get the details of.
     * @param {string} [startup] The new startup command
     * @param {ServerEnvironment} [environment] Servers environment variables. REQUIRED!
     * @param {number} [egg] The new egg you want to use
     * @param {string} [image] The new docker image you want to use
     * @param {boolean} [skip_scripts] Skip install script boolean (FALSE by default!)
     * @param {ServerIncludesInput} [options] Include information about server relationships
     * @returns {Promise<ServerAttributes>} Server information
     * @example
     * ```js
     * const res = await app.editServerStartup(1, 'node index.js') // res = ServerAttributes
     * ```
     * @example
     * ```js
     * app.editServerStartup(1, 'node index.js').then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    editServerStartup: (serverId: number, startup?: string | undefined, environment?: ServerEnvironment | undefined, egg?: number | undefined, image?: string | undefined, skip_scripts?: boolean, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param {String} name Name of server to create
     * @param {Integer} ownerId User ID of who should own this server
     * @param {String} description Description of server
     * @param {Integer} nestId ID of the nest to use when making a server
     * @param {Integer} eggId Egg ID to use when installing the server
     * @param {Record<string, unknown>} [environment] Servers environment variables. Some are REQUIRED! If there is a default value and none is provided default is used!
     * @param {Integer} [cpu=0] Amount of cpu resources to give (1 core = 100) (0 unlimited)
     * @param {Integer} [ram=0] Amount of memory resources to give (1024 = 1GB) (0 unlimited)
     * @param {Integer} [disk=0] Amount of disk space to give (1024 = 1GB) (0 unlimited)
     * @param {Integer} [amountOfDatabases=0] The max amount of databases a server can use
     * @param {Integer} [amountOfAllocations=0] The max amount of allocation(s) a server can use
     * @param {Integer} [amountOfBackups=0] The max amount of backups a server can use
     * @param {String} [startupCmd] The command to use when starting this server
     * @param {String} [dockerImage] The image to use from Docker
     * @param {Integer} [swap=0] The amount of Swap the server has
     * @param {Integer} [io=500] Set this to 500.
     * @param {ServerIncludesInput} [options] Include information about server relationships
     * @returns {Promise<string>ServerAttributes} Returns the created server object
     * @example
     * ```js
     * const res = await app.createServer('BUNGEE', 1, 'BUNGEE SERVER', 1, 1) // res = ServerAttributes
     * ```
     * @example
     * ```js
     * app.createServer('BUNGEE', 1, 'BUNGEE SERVER', 1, 1).then((res) => console.log(res)) // res = ServerAttributes
     * ```
     */
    createServer: (name: string, ownerId: number, description: string, nestId: number, eggId: number, environment?: ServerEnvironment | undefined, cpu?: number, ram?: number, disk?: number, amountOfDatabases?: number, amountOfAllocations?: number, amountOfBackups?: number, startupCmd?: string | undefined, dockerImage?: string | undefined, swap?: number, io?: number, options?: ServerIncludesInput | undefined) => Promise<ServerAttributes>;
    /**
     * @param {number} internalId Internal ID of the server to delete
     * @param {boolean} [forceDelete=false] Boolean if forcefully delete a server
     * @returns {Promise<string>} If successful returns Successfully deleted!
     * @example
     * ```js
     * const res = await app.deleteServer(1) // res = Successfully deleted!
     * ```
     * @example
     * ```js
     * app.deleteServer(1, true).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    deleteServer(internalId: number, forceDelete?: boolean): Promise<string>;
    /**
     * @param {Number} internalId Internal ID of the server to suspend
     * @returns {Promise<string>} If successful returns Successfully suspended!
     * @example
     * ```js
     * const res = await app.suspendServer(1) // res = Successfully suspended!
     * ```
     * @example
     * ```js
     * app.suspendServer(1).then((res) => console.log(res)) // res = Successfully suspended!
     * ```
     */
    suspendServer(internalID: number): Promise<string>;
    /**
     * @param {Number} internalId Internal ID of the server to suspend
     * @returns {Promise<string>} If successful returns Successfully unsuspended!
     * @example
     * ```js
     * const res = await app.unSuspendServer(1) // res = Successfully unsuspended!
     * ```
     * @example
     * ```js
     * app.unSuspendServer(1).then((res) => console.log(res)) // res = Successfully unsuspended!
     * ```
     */
    unSuspendServer(internalID: number): Promise<string>;
    /**
     * @param {Number} internalId Internal ID of the server to reinstall
     * @returns {Promise<string>} If successful returns Successfully reinstalled!
     * @example
     * ```js
     * const res = await app.reinstallServer(1) // res = Successfully reinstalled!
     * ```
     * @example
     * ```js
     * app.reinstallServer(1).then((res) => console.log(res)) // res = Successfully reinstalled!
     * ```
     */
    reinstallServer(internalID: number): Promise<string>;
}
