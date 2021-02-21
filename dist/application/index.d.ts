declare class Application {
    private host;
    private key;
    /**
     * @param host - Panels address
     * @param key - Api key to use
     * @param fast - Fast login (No credential check)
     */
    constructor(host: string, key: string, fast?: boolean);
    /**
     @internal
     */
    private testAPI;
    getAllServers: (options?: import("./interfaces/Server").ServerIncludesInput | undefined) => Promise<import("./interfaces/Server").default[]>;
    getAllNodes: (options?: import("./interfaces/Node").NodeIncludeInput | undefined) => Promise<import("./interfaces/Node").default[]>;
    getAllUsers: (options?: import("./interfaces/User").UserIncludeInput | undefined) => Promise<import("./interfaces/User").default[]>;
    getUserInfo: (userId: number, options?: import("./interfaces/User").UserIncludeInput | undefined) => Promise<import("./interfaces/User").UserAttributes>;
    getNodeInfo: (nodeId: number, options?: import("./interfaces/Node").NodeIncludeInput | undefined) => Promise<import("./interfaces/Node").NodeAttributes>;
    getServerInfo: (serverId: number, options?: import("./interfaces/Server").ServerIncludesInput | undefined) => Promise<import("./interfaces/Server").ServerAttributes>;
    getAllNests: (options?: import("./interfaces/Nest").NestIncludeInput | undefined) => Promise<import("./interfaces/Nest").default[]>;
    getNestInfo: (nestId: number, options?: import("./interfaces/Nest").NestIncludeInput | undefined) => Promise<import("./interfaces/Nest").NestAttributes>;
    getAllNestEggs: (nestId: number, options?: import("./interfaces/Nest").EggIncludeInput | undefined) => Promise<import("./interfaces/Egg").default[]>;
    getEggInfo: (nestID: number, eggId: number, options?: import("./interfaces/Nest").EggIncludeInput | undefined) => Promise<import("./interfaces/Egg").EggAttributes>;
    getServerInfoByExtId: (serverId: string, options?: import("./interfaces/Server").ServerIncludesInput | undefined) => Promise<import("./interfaces/Server").ServerAttributes>;
    getServersDatabases: (serverId: number, options?: import("./interfaces/Database").DatabaseIncludeInput | undefined) => Promise<import("./interfaces/Database").default[]>;
    getServersDatabaseInfo: (serverId: number, databaseId: number, options?: import("./interfaces/Database").DatabaseIncludeInput | undefined) => Promise<import("./interfaces/Database").DatabaseAttributes>;
    getNodeConfig: (nodeId: number) => Promise<import("./interfaces/Node").NodeConfig>;
    getAllAllocations: (nodeId: number, options?: import("./interfaces/Allocation").AllocationIncludeInput | undefined) => Promise<import("./interfaces/Allocation").default[]>;
    createUser: (username: string, firstName: string, lastName: string, email: string, password?: string, isAdmin?: boolean, language?: string, externalId?: string | undefined) => Promise<import("./interfaces/User").UserAttributes>;
    createServer: (name: string, ownerId: number, description: string, nestId: number, eggId: number, environment?: import("./interfaces/Server").ServerEnvironment | undefined, cpu?: number, ram?: number, disk?: number, amountOfDatabases?: number, amountOfAllocations?: number, amountOfBackups?: number, startupCmd?: string | undefined, dockerImage?: string | undefined, swap?: number, io?: number, options?: import("./interfaces/Server").ServerIncludesInput | undefined) => Promise<import("./interfaces/Server").ServerAttributes>;
    createNode: (name: string, description: string, locationID: number, fqdn: string, scheme: "http" | "https", ram: number, disk: number, isPublic?: boolean, daemonPort?: number, daemonSFTPPort?: number, ramOverAllocate?: number, diskOverallocate?: number, daemonDir?: string, maintenceMode?: boolean, maxUploadSize?: number, behindProxy?: boolean, options?: import("./interfaces/Node").NodeIncludeInput | undefined) => Promise<import("./interfaces/Node").NodeAttributes>;
    createDatabase: (name: string, dbHostId: number, serverId: number, allowedIp?: string, options?: import("./interfaces/Database").DatabaseIncludeInput | undefined) => Promise<import("./interfaces/Database").DatabaseAttributes>;
    suspendServer: (internalID: number) => Promise<string>;
    unSuspendServer: (internalID: number) => Promise<string>;
    reinstallServer: (internalID: number) => Promise<string>;
    resetDatabasePassword: (serverId: number, databaseId: number) => Promise<string>;
    createAllocation: (nodeId: number, ip: string | undefined, ports: string[], alias?: string) => Promise<string>;
    editUser: (userId: number, username?: string | undefined, firstName?: string | undefined, lastName?: string | undefined, email?: string | undefined, password?: string | undefined, isAdmin?: boolean | undefined, language?: string | undefined, externalId?: string | undefined, options?: import("./interfaces/User").UserIncludeInput | undefined) => Promise<import("./interfaces/User").UserAttributes>;
    editServerDetails: (serverId: number, name?: string | undefined, userId?: number | undefined, externalId?: string | undefined, description?: string | undefined, options?: import("./interfaces/Server").ServerIncludesInput | undefined) => Promise<import("./interfaces/Server").ServerAttributes>;
    editServerBuild: (serverId: number, allocationId?: number | undefined, addAllocations?: number[] | undefined, removeAllocations?: number[] | undefined, cpu?: number | undefined, memory?: number | undefined, disk?: number | undefined, databases?: number | undefined, allocations?: number | undefined, backups?: number | undefined, swap?: number | undefined, io?: number | undefined, threads?: string | undefined, options?: import("./interfaces/Server").ServerIncludesInput | undefined) => Promise<import("./interfaces/Server").ServerAttributes>;
    editServerStartup: (serverId: number, startup?: string | undefined, environment?: import("./interfaces/Server").ServerEnvironment | undefined, egg?: number | undefined, image?: string | undefined, skip_scripts?: boolean, options?: import("./interfaces/Server").ServerIncludesInput | undefined) => Promise<import("./interfaces/Server").ServerAttributes>;
    editNode: (nodeId: number, name?: string | undefined, description?: string | undefined, locationID?: number | undefined, fqdn?: string | undefined, scheme?: "http" | "https" | undefined, ram?: number | undefined, disk?: number | undefined, isPublic?: boolean | undefined, daemonPort?: number | undefined, daemonSFTPPort?: number | undefined, ramOverAllocate?: number | undefined, diskOverallocate?: number | undefined, daemonDir?: string | undefined, maintenceMode?: boolean | undefined, maxUploadSize?: number | undefined, behindProxy?: boolean | undefined, resetSecret?: boolean, options?: import("./interfaces/Node").NodeIncludeInput | undefined) => Promise<import("./interfaces/Node").NodeAttributes>;
    deleteUser: (userId: number) => Promise<string>;
    deleteNode: (nodeId: number) => Promise<string>;
    deleteServer: (internalId: number, forceDelete?: boolean) => Promise<string>;
    deleteDatabase: (serverId: number, databaseId: number) => Promise<string>;
    deleteAllocation: (nodeId: number, allocationId: number) => Promise<string>;
}
export { Application };
