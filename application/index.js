const fetch = require('node-fetch'); // import node-fetch

// POST
const createuser = require('./methods/createUser.js');
const createserver = require('./methods/createServer.js');
const createnode = require('./methods/createNode.js');
const createdatabase = require('./methods/createDatabase.js');
const suspendserver = require('./methods/suspendServer.js');
const unsuspendserver = require('./methods/unSuspendServer.js');

// GET
const getallservers = require('./methods/getAllServers.js');
const getallusers = require('./methods/getAllUsers.js');
const getallnodes = require('./methods/getAllNodes.js');
const getuserinfo = require('./methods/getUserInfo.js');
const getegginfo = require('./methods/getEggInfo.js');
const getnodeinfo = require('./methods/getNodeInfo.js');
const getserverinfo = require('./methods/getServerInfo.js');

// PATCH
const edituser = require('./methods/editUser.js');

// DELETE
const deleteuser = require('./methods/deleteUser.js');
const deletenode = require('./methods/deleteNode.js');
const deleteserver = require('./methods/deleteServer.js');

/**
 * @param {String} HOST Panels address
 * @param {String} KEY Api key to use
 * @param {Boolean, String} callback Returns true when login is successful and a error message if connection failed
 */

function login(HOST, KEY, callback) {
    HOST = HOST.trim();
    if (HOST.endsWith('/')) HOST = HOST.slice(0, -1);
    process.env.APPLICATION_JSPTEROAPI_HOST = HOST;
    process.env.APPLICATION_JSPTEROAPI_KEY = KEY;

    fetch(HOST + '/api/application/users', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + KEY,
        },
    })
        .then((res) => {
            if (typeof res == 'undefined') {
                return callback(
                    false,
                    'There is an error trying to access host!'
                );
            } else if (res.status == 404)
                return callback(false, 'API Key is not valid! (Application)!');
            else if (!res.ok) {
                return callback(
                    false,
                    'There is an error trying to access host!'
                );
            } else {
                return callback(true);
            }
        })
        .catch((err) => {
            console.error({ message: 'Fetch failed', error: err });
        });
}

/**
 * @param {String} HOST The host to use
 * @param {String} KEY The application key to use
 * @Warning USE THIS ONLY IF YOU KNOW YOUR CREDENTIALS ARE 100% CORRECT, OR THEY NEVER CHANGE
 */

function fastLogin(HOST, KEY) {
    HOST = HOST.trim();
    if (HOST.endsWith('/')) HOST = HOST.slice(0, -1);

    process.env.APPLICATION_JSPTEROAPI_HOST = HOST;
    process.env.APPLICATION_JSPTEROAPI_KEY = KEY;
}

module.exports = {
    login: login,
    fastLogin: fastLogin,

    // POST
    createUser: createuser,
    createServer: createserver,
    createNode: createnode,
    createDatabase: createdatabase,
    suspendServer: suspendserver,
    unSuspendServer: unsuspendserver,

    // GET
    getAllServers: getallservers,
    getAllNodes: getallnodes,
    getAllUsers: getallusers,
    getUserInfo: getuserinfo,
    getEggInfo: getegginfo,
    getNodeInfo: getnodeinfo,
    getServerInfo: getserverinfo,

    // PATCH
    editUser: edituser,

    // DELETE
    deleteUser: deleteuser,
    deleteNode: deletenode,
    deleteServer: deleteserver,
};
