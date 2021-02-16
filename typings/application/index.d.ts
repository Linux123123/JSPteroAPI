import getAllServers from './methods/getAllServers';
import getallusers from './methods/getAllUsers';
import getallnodes from './methods/getAllNodes';
import getuserinfo from './methods/getUserInfo';
import getegginfo from './methods/getEggInfo';
import getnodeinfo from './methods/getNodeInfo';
import getserverinfo from './methods/getServerInfo';
import createuser from './methods/createUser';
import createserver from './methods/createServer';
import createnode from './methods/createNode';
import createdatabase from './methods/createDatabase';
import suspendserver from './methods/suspendServer';
import unsuspendserver from './methods/unSuspendServer';
import edituser from './methods/editUser';
import deleteuser from './methods/deleteUser';
import deletenode from './methods/deleteNode';
import deleteserver from './methods/deleteServer';
declare class app {
    /**
     * @param {String} Host Panels address
     * @param {String} Key Api key to use
     * @param {Boolean} Fast Fast login (No credential check)
     */
    constructor(Host: string, Key: string, Fast?: boolean);
    private testAPI;
    getAllServers: typeof getAllServers;
    getAllNodes: typeof getallnodes;
    getAllUsers: typeof getallusers;
    getUserInfo: typeof getuserinfo;
    getEggInfo: typeof getegginfo;
    getNodeInfo: typeof getnodeinfo;
    getServerInfo: typeof getserverinfo;
    createUser: typeof createuser;
    createServer: typeof createserver;
    createNode: typeof createnode;
    createDatabase: typeof createdatabase;
    suspendServer: typeof suspendserver;
    unSuspendServer: typeof unsuspendserver;
    editUser: typeof edituser;
    deleteUser: typeof deleteuser;
    deleteNode: typeof deletenode;
    deleteServer: typeof deleteserver;
}
export default app;
