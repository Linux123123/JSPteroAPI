"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch")); // import node-fetch
// GET
const getAllServers_1 = __importDefault(require("./methods/getAllServers"));
const getServerInfo_1 = __importDefault(require("./methods/getServerInfo"));
const getServerResources_1 = __importDefault(require("./methods/getServerResources"));
const getWebsocketAuthData_1 = __importDefault(require("./methods/getWebsocketAuthData"));
const getPermissions_1 = __importDefault(require("./methods/getPermissions"));
const getAllDatabases_1 = __importDefault(require("./methods/getAllDatabases"));
// POST
const sendCommand_1 = __importDefault(require("./methods/sendCommand"));
const setPowerState_1 = __importDefault(require("./methods/setPowerState"));
const createDatabase_1 = __importDefault(require("./methods/createDatabase"));
const rotateDatabasePass_1 = __importDefault(require("./methods/rotateDatabasePass"));
// DELETE
const deleteDatabase_1 = __importDefault(require("./methods/deleteDatabase"));
class client {
    /**
     * @param {String} Host Panels address
     * @param {String} Key Api key to use
     * @param {Boolean} Fast Fast login (No credential check)
     */
    constructor(Host, Key, Fast = false) {
        // Get
        this.getAllServers = getAllServers_1.default;
        this.getServerInfo = getServerInfo_1.default;
        this.getServerResources = getServerResources_1.default;
        this.getWebsocketAuthData = getWebsocketAuthData_1.default;
        this.getPermissions = getPermissions_1.default;
        this.getAllDatabases = getAllDatabases_1.default;
        // POST
        this.sendCommand = sendCommand_1.default;
        this.setPowerState = setPowerState_1.default;
        this.createDatabase = createDatabase_1.default;
        this.rotateDatabasePass = rotateDatabasePass_1.default;
        // Delete
        this.deleteDatabase = deleteDatabase_1.default;
        Host = Host.trim();
        if (Host.endsWith('/'))
            Host = Host.slice(0, -1);
        if (!Fast)
            this.testAPI(Host, Key);
        process.env.ClientHost = Host;
        process.env.ClientKey = Key;
    }
    async testAPI(Host, Key) {
        const options = {
            method: 'GET',
            headers: {
                responseEncoding: 'utf8',
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + Key,
            },
        };
        let res = await node_fetch_1.default(Host + '/api/client', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Client)!');
        }
        else if (!res.ok) {
            throw new Error(`There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`);
        }
    }
}
exports.default = client;
