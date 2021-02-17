import fetch, { RequestInit } from 'node-fetch'; // import node-fetch

// GET
import getAllServers from './methods/getAllServers';
import getallusers from './methods/getAllUsers';
import getallnodes from './methods/getAllNodes';
import getuserinfo from './methods/getUserInfo';
import getegginfo from './methods/getEggInfo';
import getnodeinfo from './methods/getNodeInfo';
import getserverinfo from './methods/getServerInfo';

// POST
import createuser from './methods/createUser';
import createserver from './methods/createServer';
import createnode from './methods/createNode';
import createdatabase from './methods/createDatabase';
import suspendserver from './methods/suspendServer';
import unsuspendserver from './methods/unSuspendServer';

// PATCH
import edituser from './methods/editUser';

// DELETE
import deleteuser from './methods/deleteUser';
import deletenode from './methods/deleteNode';
import deleteserver from './methods/deleteServer';

export default class app {
    /**
     * @param {String} Host Panels address
     * @param {String} Key Api key to use
     * @param {Boolean} Fast Fast login (No credential check)
     */
    public constructor(Host: string, Key: string, Fast: boolean = false) {
        Host = Host.trim();
        if (Host.endsWith('/')) Host = Host.slice(0, -1);
        if (!Fast) this.testAPI(Host, Key);
        process.env.AppHost = Host;
        process.env.AppKey = Key;
    }
    private async testAPI(Host: string, Key: string): Promise<void> {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                'responseEncoding': 'utf8',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Key,
            },
        };
        let res = await fetch(Host + '/api/application/users', options);
        if (res.status == 403) {
            throw new Error('API Key is not valid! (Application)!');
        } else if (!res.ok) {
            throw new Error(
                `There was an error while trying to access host! Status: ${res.status} StatusText: ${res.statusText}`,
            );
        }
    }
    // GET
    public getAllServers = getAllServers;
    public getAllNodes = getallnodes;
    public getAllUsers = getallusers;
    public getUserInfo = getuserinfo;
    public getEggInfo = getegginfo;
    public getNodeInfo = getnodeinfo;
    public getServerInfo = getserverinfo;

    // POST
    public createUser = createuser;
    public createServer = createserver;
    public createNode = createnode;
    public createDatabase = createdatabase;
    public suspendServer = suspendserver;
    public unSuspendServer = unsuspendserver;

    // PATCH
    public editUser = edituser;

    // // DELETE
    public deleteUser = deleteuser;
    public deleteNode = deletenode;
    public deleteServer = deleteserver;
}
