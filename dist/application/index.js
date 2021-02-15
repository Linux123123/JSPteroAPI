"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch")); // import node-fetch
// GET
const getAllServers_1 = __importDefault(require("./methods/getAllServers"));
const getAllUsers_1 = __importDefault(require("./methods/getAllUsers"));
const getAllNodes_1 = __importDefault(require("./methods/getAllNodes"));
const getUserInfo_1 = __importDefault(require("./methods/getUserInfo"));
const getEggInfo_1 = __importDefault(require("./methods/getEggInfo"));
const getNodeInfo_1 = __importDefault(require("./methods/getNodeInfo"));
const getServerInfo_1 = __importDefault(require("./methods/getServerInfo"));
// POST
const createUser_1 = __importDefault(require("./methods/createUser"));
const createServer_1 = __importDefault(require("./methods/createServer"));
const createNode_1 = __importDefault(require("./methods/createNode"));
const createDatabase_1 = __importDefault(require("./methods/createDatabase"));
const suspendServer_1 = __importDefault(require("./methods/suspendServer"));
const unSuspendServer_1 = __importDefault(require("./methods/unSuspendServer"));
// PATCH
const editUser_1 = __importDefault(require("./methods/editUser"));
// DELETE
const deleteUser_1 = __importDefault(require("./methods/deleteUser"));
const deleteNode_1 = __importDefault(require("./methods/deleteNode"));
const deleteServer_1 = __importDefault(require("./methods/deleteServer"));
class app {
    /**
     * @param {String} Host Panels address
     * @param {String} Key Api key to use
     * @param {Boolean} Fast Fast login (No credential check)
     */
    constructor(Host, Key, Fast = false) {
        // GET
        this.getAllServers = getAllServers_1.default;
        this.getAllNodes = getAllNodes_1.default;
        this.getAllUsers = getAllUsers_1.default;
        this.getUserInfo = getUserInfo_1.default;
        this.getEggInfo = getEggInfo_1.default;
        this.getNodeInfo = getNodeInfo_1.default;
        this.getServerInfo = getServerInfo_1.default;
        // POST
        this.createUser = createUser_1.default;
        this.createServer = createServer_1.default;
        this.createNode = createNode_1.default;
        this.createDatabase = createDatabase_1.default;
        this.suspendServer = suspendServer_1.default;
        this.unSuspendServer = unSuspendServer_1.default;
        // PATCH
        this.editUser = editUser_1.default;
        // // DELETE
        this.deleteUser = deleteUser_1.default;
        this.deleteNode = deleteNode_1.default;
        this.deleteServer = deleteServer_1.default;
        Host = Host.trim();
        if (Host.endsWith('/'))
            Host = Host.slice(0, -1);
        if (!Fast)
            this.testAPI(Host, Key);
        process.env.AppHost = Host;
        process.env.AppKey = Key;
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
        let res = await node_fetch_1.default(Host + '/api/application/users', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Application)!');
        }
        else if (!res.ok) {
            throw new Error(`There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`);
        }
    }
}
exports.default = app;
