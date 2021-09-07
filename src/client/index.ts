import fetch, { RequestInit } from 'node-fetch'; // import node-fetch
import { serverMethods } from './methods/serverMethods';
import { consoleMethods } from './methods/consoleMethods';
import { fileMethods } from './methods/fileMethods';
import { databaseMethods } from './methods/databaseMethods';
import { accountMethods } from './methods/accountMethods';
import { scheduleMethods } from './methods/scheduleMethods';
import { JSPteroAPIError } from '../modules/Error';
import { Request } from './ClientRequest';
import { networkMethods } from './methods/networkMethods';

class Client {
    /**
     * @param host - Panels address
     * @param key - Api key to use
     * @param errorHandler - A custom function to handle errors
     * @param fast - Fast login (No credential check)
     */
    public constructor(
        private host: string,
        private key: string,
        private errorHandler = (error: JSPteroAPIError): void => {
            throw error;
        },
        fast = false,
    ) {
        host = host.trim();
        if (host.endsWith('/')) host = host.slice(0, -1);
        this.host = host;
        if (!fast) this.testAPI();
        // Server
        const servermethods = new serverMethods(this);
        this.getAllServers = servermethods.getAllServers;
        this.getServerInfo = servermethods.getServerInfo;
        this.getServerResources = servermethods.getServerResources;
        this.sendCommand = servermethods.sendCommand;
        this.setPowerState = servermethods.setPowerState;
        // Console
        const consolemethods = new consoleMethods(this);
        this.startConsoleConnection = consolemethods.startConsoleConnection;
        // File
        const filemethods = new fileMethods(this);
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
        const databasemethods = new databaseMethods(this);
        this.getAllDatabases = databasemethods.getAllDatabases;
        this.createDatabase = databasemethods.createDatabase;
        this.deleteDatabase = databasemethods.deleteDatabase;
        this.rotateDatabasePass = databasemethods.rotateDatabasePass;
        // Account
        const accountmethods = new accountMethods(this);
        this.getAllPermissions = accountmethods.getAllPermissions;
        this.getAccountInfo = accountmethods.getAccountInfo;
        this.getAccount2FADetails = accountmethods.getAccount2FADetails;
        this.enable2FA = accountmethods.enable2FA;
        this.updateEmail = accountmethods.updateEmail;
        this.updatePassword = accountmethods.updatePassword;
        this.getAllApiKeys = accountmethods.getAllApiKeys;
        this.createApiKey = accountmethods.createApiKey;
        this.deleteApiKey = accountmethods.deleteApiKey;
        // Schedule
        const schedulemethods = new scheduleMethods(this);
        this.getAllSchedules = schedulemethods.getAllSchedules;
        this.createSchedule = schedulemethods.createSchedule;
        this.getScheduleInfo = schedulemethods.getScheduleInfo;
        this.editSchedule = schedulemethods.editSchedule;

        // Network
        const networkmethods = new networkMethods(this);
        this.getAllAlocations = networkmethods.getAllAlocations;
        this.assignAllocation = networkmethods.assignAllocation;
        this.setAllocationNote = networkmethods.setAllocationNote;
        this.setAllocationPrimary = networkmethods.setAllocationPrimary;
        this.deleteAllocation = networkmethods.deleteAllocation;
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

    /**
     @internal
     */
    public request = new Request(this.host, this.host, this.errorHandler)
        .request;

    // Get
    public getAllServers;
    public getServerInfo;
    public getServerResources;
    public getAllPermissions;
    public getAllDatabases;
    public getAllFiles;
    public getFileContents;
    public getFileDownloadLink;
    public getFileUploadLink;
    public getAccountInfo;
    public getAccount2FADetails;
    public getAllApiKeys;
    public getAllSchedules;
    public getScheduleInfo;
    public getAllAlocations;
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
    public enable2FA;
    public createApiKey;
    public createSchedule;
    public editSchedule;
    public assignAllocation;
    public setAllocationNote;
    public setAllocationPrimary;
    // Delete
    public deleteDatabase;
    public deleteApiKey;
    public deleteAllocation;
    // PUT
    public renameFile;
    public updateEmail;
    public updatePassword;

    public startConsoleConnection;
}

export { Client };
