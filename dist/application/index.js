"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const node_fetch_1 = __importDefault(require("node-fetch")); // import node-fetch
const allocationMethods_1 = __importDefault(require("./methods/allocationMethods"));
const databaseMethods_1 = __importDefault(require("./methods/databaseMethods"));
const nestMethods_1 = __importDefault(require("./methods/nestMethods"));
const nodeMethods_1 = __importDefault(require("./methods/nodeMethods"));
const serverMethods_1 = __importDefault(require("./methods/serverMethods"));
const userMethods_1 = __importDefault(require("./methods/userMethods"));
class Application {
    /**
     * @param host - Panels address
     * @param key - Api key to use
     * @param fast - Fast login (No credential check)
     */
    constructor(host, key, fast = false) {
        this.host = host;
        this.key = key;
        host = host.trim();
        if (host.endsWith('/'))
            host = host.slice(0, -1);
        this.host = host;
        if (!fast)
            this.testAPI();
        const servermethods = new serverMethods_1.default(host, key);
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
        const nestmethods = new nestMethods_1.default(host, key);
        this.getAllNests = nestmethods.getAllNests;
        this.getNestInfo = nestmethods.getNestInfo;
        this.getAllNestEggs = nestmethods.getAllNestEggs;
        this.getEggInfo = nestmethods.getEggInfo;
        const databasemethods = new databaseMethods_1.default(host, key);
        this.getServersDatabases = databasemethods.getServersDatabases;
        this.getServersDatabaseInfo = databasemethods.getServersDatabaseInfo;
        this.createDatabase = databasemethods.createDatabase;
        this.resetDatabasePassword = databasemethods.resetDatabasePassword;
        this.deleteDatabase = databasemethods.deleteDatabase;
        const usermethods = new userMethods_1.default(host, key);
        this.getAllUsers = usermethods.getAllUsers;
        this.getUserInfo = usermethods.getUserInfo;
        this.createUser = usermethods.createUser;
        this.editUser = usermethods.editUser;
        this.deleteUser = usermethods.deleteUser;
        const nodemethods = new nodeMethods_1.default(host, key);
        this.getAllNodes = nodemethods.getAllNodes;
        this.getNodeInfo = nodemethods.getNodeInfo;
        this.getNodeConfig = nodemethods.getNodeConfig;
        this.createNode = nodemethods.createNode;
        this.editNode = nodemethods.editNode;
        this.deleteNode = nodemethods.deleteNode;
        const allocationmethods = new allocationMethods_1.default(host, key);
        this.getAllAllocations = allocationmethods.getAllAllocations;
        this.createAllocation = allocationmethods.createAllocation;
        this.deleteAllocation = allocationmethods.deleteAllocation;
    }
    /**
     @internal
     */
    async testAPI() {
        const options = {
            method: 'GET',
            headers: {
                'responseEncoding': 'utf8',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key,
            },
        };
        const res = await node_fetch_1.default(this.host + '/api/application/users', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Application)!');
        }
        else if (!res.ok) {
            throw new Error(`There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`);
        }
    }
}
exports.Application = Application;
