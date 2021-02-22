import fetch, { RequestInit } from 'node-fetch'; // import node-fetch
import { allocationMethods } from './methods/allocationMethods';
import { databaseMethods } from './methods/databaseMethods';
import { nestMethods } from './methods/nestMethods';
import { nodeMethods } from './methods/nodeMethods';
import { serverMethods } from './methods/serverMethods';
import { userMethods } from './methods/userMethods';
class Application {
    /**
     * @param host - Panels address
     * @param key - Api key to use
     * @param fast - Fast login (No credential check)
     */
    public constructor(
        private host: string,
        private key: string,
        fast = false,
    ) {
        host = host.trim();
        if (host.endsWith('/')) host = host.slice(0, -1);
        this.host = host;
        if (!fast) this.testAPI();
        const servermethods = new serverMethods(host, key);
        this.getAllServers = servermethods.getAllServers;
        this.getServerInfo = servermethods.getServerInfo;
        this.createServer = servermethods.createServer;
        this.deleteServer = servermethods.deleteServer;
        this.suspendServer = servermethods.suspendServer;
        this.unSuspendServer = servermethods.unSuspendServer;
        this.reinstallServer = servermethods.reinstallServer;
        this.getServerInfoByExtId = servermethods.getServerInfoByExtId;
        this.editServerDetails = servermethods.editServerDetails;
        this.editServerBuild = servermethods.editServerBuild;
        this.editServerStartup = servermethods.editServerStartup;
        const nestmethods = new nestMethods(host, key);
        this.getAllNests = nestmethods.getAllNests;
        this.getNestInfo = nestmethods.getNestInfo;
        this.getAllNestEggs = nestmethods.getAllNestEggs;
        this.getEggInfo = nestmethods.getEggInfo;
        const databasemethods = new databaseMethods(host, key);
        this.getServersDatabases = databasemethods.getServersDatabases;
        this.getServersDatabaseInfo = databasemethods.getServersDatabaseInfo;
        this.createDatabase = databasemethods.createDatabase;
        this.resetDatabasePassword = databasemethods.resetDatabasePassword;
        this.deleteDatabase = databasemethods.deleteDatabase;
        const usermethods = new userMethods(host, key);
        this.getAllUsers = usermethods.getAllUsers;
        this.getUserInfo = usermethods.getUserInfo;
        this.createUser = usermethods.createUser;
        this.editUser = usermethods.editUser;
        this.deleteUser = usermethods.deleteUser;
        const nodemethods = new nodeMethods(host, key);
        this.getAllNodes = nodemethods.getAllNodes;
        this.getNodeInfo = nodemethods.getNodeInfo;
        this.getNodeConfig = nodemethods.getNodeConfig;
        this.createNode = nodemethods.createNode;
        this.editNode = nodemethods.editNode;
        this.deleteNode = nodemethods.deleteNode;
        const allocationmethods = new allocationMethods(host, key);
        this.getAllAllocations = allocationmethods.getAllAllocations;
        this.createAllocation = allocationmethods.createAllocation;
        this.deleteAllocation = allocationmethods.deleteAllocation;
    }
    /**
     @internal
     */
    private async testAPI(): Promise<void> {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'responseEncoding': 'utf8',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key,
            },
        };
        const res = await fetch(this.host + '/api/application/users', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Application)!');
        } else if (!res.ok) {
            throw new Error(
                `There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`,
            );
        }
    }
    // GET
    public getAllServers;
    public getAllNodes;
    public getAllUsers;
    public getUserInfo;
    public getNodeInfo;
    public getServerInfo;
    public getAllNests;
    public getNestInfo;
    public getAllNestEggs;
    public getEggInfo;
    public getServerInfoByExtId;
    public getServersDatabases;
    public getServersDatabaseInfo;
    public getNodeConfig;
    public getAllAllocations;
    // POST
    public createUser;
    public createServer;
    public createNode;
    public createDatabase;
    public suspendServer;
    public unSuspendServer;
    public reinstallServer;
    public resetDatabasePassword;
    public createAllocation;
    // PATCH
    public editUser;
    public editServerDetails;
    public editServerBuild;
    public editServerStartup;
    public editNode;
    // // DELETE
    public deleteUser;
    public deleteNode;
    public deleteServer;
    public deleteDatabase;
    public deleteAllocation;
}

export { Application };
