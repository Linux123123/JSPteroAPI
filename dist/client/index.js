"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const node_fetch_1 = __importDefault(require("node-fetch")); // import node-fetch
const serverMethods_1 = require("./methods/serverMethods");
const consoleMethods_1 = require("./methods/consoleMethods");
const fileMethods_1 = require("./methods/fileMethods");
const databaseMethods_1 = require("./methods/databaseMethods");
const accountMethods_1 = require("./methods/accountMethods");
class Client {
    /**
     * @param Host - Panels address
     * @param Key - Api key to use
     * @param Fast - Fast login (No credential check)
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
        // Server
        const servermethods = new serverMethods_1.serverMethods(host, key);
        this.getAllServers = servermethods.getAllServers;
        this.getServerInfo = servermethods.getServerInfo;
        this.getServerResources = servermethods.getServerResources;
        this.sendCommand = servermethods.sendCommand;
        this.setPowerState = servermethods.setPowerState;
        // Console
        const consolemethods = new consoleMethods_1.consoleMethods(host, key);
        this.getWebsocketAuthData = consolemethods.getWebsocketAuthData;
        // File
        const filemethods = new fileMethods_1.fileMethods(host, key);
        this.getAllFiles = filemethods.getAllFiles;
        this.getFileContents = filemethods.getFileContents;
        this.writeFile = filemethods.writeFile;
        this.renameFile = filemethods.renameFile;
        this.copyFile = filemethods.copyFile;
        this.getFileDownloadLink = filemethods.getFileDownloadLink;
        this.compressFile = filemethods.compressFile;
        this.decompressFile = filemethods.decompressFile;
        this.deleteFile = filemethods.deleteFile;
        this.createFolder = filemethods.createFolder;
        this.getFileUploadLink = filemethods.getFileUploadLink;
        // Database
        const databasemethods = new databaseMethods_1.databaseMethods(host, key);
        this.getAllDatabases = databasemethods.getAllDatabases;
        this.createDatabase = databasemethods.createDatabase;
        this.deleteDatabase = databasemethods.deleteDatabase;
        this.rotateDatabasePass = databasemethods.rotateDatabasePass;
        // Account
        const accountmethods = new accountMethods_1.accountMethods(host, key);
        this.getAllPermissions = accountmethods.getAllPermissions;
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
        const res = await node_fetch_1.default(this.host + '/api/client', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Client)!');
        }
        else if (!res.ok) {
            throw new Error(`There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`);
        }
    }
}
exports.Client = Client;
