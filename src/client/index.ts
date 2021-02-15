import fetch, { RequestInit } from 'node-fetch'; // import node-fetch

// GET
import getallservers from './methods/getAllServers';
import getserverinfo from './methods/getServerInfo';
import getserverresources from './methods/getServerResources';
import getwebsocketauthdata from './methods/getWebsocketAuthData';
import getpermissions from './methods/getPermissions';
import getalldatabases from './methods/getAllDatabases';

// POST
import sendcommand from './methods/sendCommand';
import setpowerstate from './methods/setPowerState';
import createdatabase from './methods/createDatabase';
import rotatedatabasepass from './methods/rotateDatabasePass';

// DELETE
import deletedatabase from './methods/deleteDatabase';

class client {
    /**
     * @param {String} Host Panels address
     * @param {String} Key Api key to use
     * @param {Boolean} Fast Fast login (No credential check)
     */
    public constructor(Host: string, Key: string, Fast: boolean = false) {
        Host = Host.trim();
        if (Host.endsWith('/')) Host = Host.slice(0, -1);
        if (!Fast) this.testAPI(Host, Key);
        process.env.ClientHost = Host;
        process.env.ClientKey = Key;
    }
    private async testAPI(Host: string, Key: string): Promise<void> {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                responseEncoding: 'utf8',
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + Key,
            },
        };
        let res = await fetch(Host + '/api/client', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Client)!');
        } else if (!res.ok) {
            throw new Error(
                `There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`
            );
        }
    }
    // Get
    public getAllServers = getallservers;
    public getServerInfo = getserverinfo;
    public getServerResources = getserverresources;
    public getWebsocketAuthData = getwebsocketauthdata;
    public getPermissions = getpermissions;
    public getAllDatabases = getalldatabases;
    // POST
    public sendCommand = sendcommand;
    public setPowerState = setpowerstate;
    public createDatabase = createdatabase;
    public rotateDatabasePass = rotatedatabasepass;
    // Delete
    public deleteDatabase = deletedatabase;
}

export default client;
