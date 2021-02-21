"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
const Functions_1 = __importDefault(require("../../modules/Functions"));
const nestMethods_1 = __importDefault(require("./nestMethods"));
class serverMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
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
        this.getAllServers = async (options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'data', `/api/application/servers${Functions_1.default(options)}`);
        };
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
        this.getServerInfo = async (serverId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/application/servers/${serverId}${Functions_1.default(options)}`);
        };
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
        this.getServerInfoByExtId = async (serverId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/application/servers/external/${serverId}${Functions_1.default(options)}`);
        };
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
        this.editServerDetails = async (serverId, name, userId, externalId, description, options) => {
            const server = await this.getServerInfo(serverId);
            return new ApplicationRequest_1.default(this.host, this.key).request('PATCH', {
                name: name ? name : server.name,
                user: userId != undefined ? userId : server.user,
                external_id: externalId ? externalId : server.external_id,
                description: description ? description : server.description,
            }, 'attributes', `/api/application/servers/${serverId}/details${Functions_1.default(options)}`);
        };
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
        this.editServerBuild = async (serverId, allocationId, addAllocations, removeAllocations, cpu, memory, disk, databases, allocations, backups, swap, io, threads, options) => {
            const server = await this.getServerInfo(serverId);
            return new ApplicationRequest_1.default(this.host, this.key).request('PATCH', {
                allocation: allocationId != undefined
                    ? allocationId
                    : server.allocation,
                add_allocations: addAllocations ? addAllocations : [],
                remove_allocations: removeAllocations ? removeAllocations : [],
                memory: memory != undefined ? memory : server.limits.memory,
                swap: swap != undefined ? swap : server.limits.swap,
                disk: disk != undefined ? disk : server.limits.disk,
                io: io != undefined ? io : server.limits.io,
                cpu: cpu != undefined ? cpu : server.limits.cpu,
                threads: threads != undefined ? threads : server.limits.threads,
                feature_limits: {
                    databases: databases != undefined
                        ? databases
                        : server.feature_limits.databases,
                    allocations: allocations != undefined
                        ? allocations
                        : server.feature_limits.allocations,
                    backups: backups != undefined
                        ? backups
                        : server.feature_limits.backups,
                },
            }, 'attributes', `/api/application/servers/${serverId}/build${Functions_1.default(options)}`);
        };
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
        this.editServerStartup = async (serverId, startup, environment, egg, image, skip_scripts = false, options) => {
            const server = await this.getServerInfo(serverId, { variables: true });
            const envVars = {};
            if (environment) {
                const givenEnvVars = Object.keys(environment);
                server.relationships?.variables?.data.forEach((envVar) => {
                    const envVariable = envVar.attributes.env_variable;
                    if (givenEnvVars.includes(envVariable)) {
                        envVars[envVariable] = environment[envVariable];
                    }
                    else if (envVar.attributes.server_value) {
                        envVars[envVariable] = envVar.attributes.server_value;
                    }
                    else if (envVar.attributes.default_value) {
                        envVars[envVariable] = envVar.attributes.default_value;
                    }
                    else {
                        throw new Error(`Environment variable ${envVariable} was not defined!`);
                    }
                });
            }
            return new ApplicationRequest_1.default(this.host, this.key).request('PATCH', {
                startup: startup ? startup : server.container.startup_command,
                environment: environment
                    ? envVars
                    : server.container.environment,
                egg: egg != undefined ? egg : server.egg,
                image: image ? image : server.container.image,
                skip_scripts: skip_scripts,
            }, 'attributes', `/api/application/servers/${serverId}/startup${Functions_1.default(options)}`);
        };
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
        this.createServer = async (name, ownerId, description, nestId, eggId, environment, cpu = 0, ram = 0, disk = 0, amountOfDatabases = 0, amountOfAllocations = 0, amountOfBackups = 0, startupCmd, dockerImage, swap = 0, io = 500, options) => {
            const egg = await new nestMethods_1.default(this.host, this.key).getEggInfo(nestId, eggId, { variables: true });
            const envVars = {};
            let givenEnvVars = [];
            if (environment)
                givenEnvVars = Object.keys(environment);
            egg.relationships?.variables?.data.forEach((envVar) => {
                const envVariable = envVar.attributes.env_variable;
                if (givenEnvVars.includes(envVariable)) {
                    envVars[envVariable] = environment?.[envVariable];
                }
                else if (envVar.attributes.default_value) {
                    envVars[envVariable] = envVar.attributes.default_value;
                }
                else {
                    throw new Error(`Environment variable ${envVariable} was not defined!`);
                }
            });
            return new ApplicationRequest_1.default(this.host, this.key).request('POST', {
                name: name,
                user: ownerId,
                description: description,
                egg: eggId,
                pack: nestId,
                docker_image: dockerImage ? dockerImage : egg.docker_image,
                startup: startupCmd ? startupCmd : egg.startup,
                limits: {
                    memory: ram,
                    swap: swap,
                    disk: disk,
                    io: io,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: amountOfDatabases,
                    allocations: amountOfAllocations,
                    backups: amountOfBackups,
                },
                environment: envVars,
                allocation: {
                    default: 1,
                    additional: [],
                },
                deploy: {
                    locations: [1],
                    dedicated_ip: false,
                    port_range: [],
                },
                start_on_completion: false,
                skip_scripts: false,
                oom_disabled: false,
            }, 'attributes', `/api/application/servers${Functions_1.default(options)}`);
        };
    }
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
    async deleteServer(internalId, forceDelete = false) {
        let force = '';
        if (forceDelete)
            force = '/force';
        return new ApplicationRequest_1.default(this.host, this.key).request('DELETE', null, 'Successfully deleted!', `/api/application/servers/${internalId}${force}`);
    }
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
    async suspendServer(internalID) {
        return new ApplicationRequest_1.default(this.host, this.key).request('POST', null, 'Successfully suspended!', `/api/application/servers/${internalID}/suspend`);
    }
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
    async unSuspendServer(internalID) {
        return new ApplicationRequest_1.default(this.host, this.key).request('POST', null, 'Successfully unsuspended!', `/api/application/servers/${internalID}/unsuspend`);
    }
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
    async reinstallServer(internalID) {
        return new ApplicationRequest_1.default(this.host, this.key).request('POST', null, 'Successfully reinstalled!', `/api/application/servers/${internalID}/reinstall`);
    }
}
exports.default = serverMethods;
