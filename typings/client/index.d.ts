import getallservers from './methods/getAllServers';
import getserverinfo from './methods/getServerInfo';
import getserverresources from './methods/getServerResources';
import getwebsocketauthdata from './methods/getWebsocketAuthData';
import getpermissions from './methods/getPermissions';
import getalldatabases from './methods/getAllDatabases';
import sendcommand from './methods/sendCommand';
import setpowerstate from './methods/setPowerState';
import createdatabase from './methods/createDatabase';
import rotatedatabasepass from './methods/rotateDatabasePass';
import deletedatabase from './methods/deleteDatabase';
declare class client {
    /**
     * @param {String} Host Panels address
     * @param {String} Key Api key to use
     * @param {Boolean} Fast Fast login (No credential check)
     */
    constructor(Host: string, Key: string, Fast?: boolean);
    private testAPI;
    getAllServers: typeof getallservers;
    getServerInfo: typeof getserverinfo;
    getServerResources: typeof getserverresources;
    getWebsocketAuthData: typeof getwebsocketauthdata;
    getPermissions: typeof getpermissions;
    getAllDatabases: typeof getalldatabases;
    sendCommand: typeof sendcommand;
    setPowerState: typeof setpowerstate;
    createDatabase: typeof createdatabase;
    rotateDatabasePass: typeof rotatedatabasepass;
    deleteDatabase: typeof deletedatabase;
}
export default client;
