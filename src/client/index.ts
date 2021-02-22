import fetch, { RequestInit } from 'node-fetch'; // import node-fetch
import { serverMethods } from './methods/serverMethods';
import { consoleMethods } from './methods/consoleMethods';
import { fileMethods } from './methods/fileMethods';
import { databaseMethods } from './methods/databaseMethods';
import { accountMethods } from './methods/accountMethods';

class Client {
    /**
     * @param Host - Panels address
     * @param Key - Api key to use
     * @param Fast - Fast login (No credential check)
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
        // Server
        const servermethods = new serverMethods(host, key);
        this.getAllServers = servermethods.getAllServers;
        this.getServerInfo = servermethods.getServerInfo;
        this.getServerResources = servermethods.getServerResources;
        this.sendCommand = servermethods.sendCommand;
        this.setPowerState = servermethods.setPowerState;
        // Console
        const consolemethods = new consoleMethods(host, key);
        this.getWebsocketAuthData = consolemethods.getWebsocketAuthData;
        // File
        const filemethods = new fileMethods(host, key);
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
        const databasemethods = new databaseMethods(host, key);
        this.getAllDatabases = databasemethods.getAllDatabases;
        this.createDatabase = databasemethods.createDatabase;
        this.deleteDatabase = databasemethods.deleteDatabase;
        this.rotateDatabasePass = databasemethods.rotateDatabasePass;
        // Account
        const accountmethods = new accountMethods(host, key);
        this.getAllPermissions = accountmethods.getAllPermissions;
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
        const res = await fetch(this.host + '/api/client', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Client)!');
        } else if (!res.ok) {
            throw new Error(
                `There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`,
            );
        }
    }
    // Get
    public getAllServers;
    public getServerInfo;
    public getServerResources;
    public getWebsocketAuthData;
    public getAllPermissions;
    public getAllDatabases;
    public getAllFiles;
    public getFileContents;
    public getFileDownloadLink;
    public getFileUploadLink;
    // POST
    public sendCommand;
    public setPowerState;
    public createDatabase;
    public rotateDatabasePass;
    public copyFile;
    public writeFile;
    public compressFile;
    public decompressFile;
    public deleteFile;
    public createFolder;
    // Delete
    public deleteDatabase;
    // PUT
    public renameFile;
}

export { Client };
