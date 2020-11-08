const fetch = require('node-fetch'); // import node-fetch

// GET
const getallservers = require('./methods/getAllServers.js');
const getserverinfo = require('./methods/getServerInfo.js');
const getserverstatus = require('./methods/getServerStatus.js');
const isowner = require('./methods/isOwner.js');
const getcpuusage = require('./methods/getCPUUsage.js');
const getramusage = require('./methods/getRAMUsage.js');
const getdiskusage = require('./methods/getDiskUsage.js');

// POST
const startserver = require('./methods/startServer.js');
const stopserver = require('./methods/stopServer.js');
const killserver = require('./methods/killServer.js');
const restartserver = require('./methods/restartServer.js');
const sendcommand = require('./methods/sendCommand.js');

/**
 *
 * @param {String} HOST Panels address
 * @param {String} KEY Api key to use
 * @param {Boolean, String} callback Returns true when login is successful and a error message if API failed
 */

function login(HOST, KEY, callback) {
    HOST = HOST.trim();
    if (HOST.endsWith('/')) HOST = HOST.slice(0, -1);
    process.env.CLIENT_JSPTEROAPI_HOST = HOST;
    process.env.CLIENT_JSPTEROAPI_KEY = KEY;

    fetch(HOST + '/api/client', {
        method: 'GET',
        responseEncoding: 'utf8',
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
 *
 * @param {String} HOST The host to use
 * @param {String} KEY The application key to use
 * @Warning USE THIS ONLY IF YOU KNOW YOUR CREDENTIALS ARE 100% CORRECT, OR THEY NEVER CHANGE
 */
function fastLogin(HOST, KEY) {
    HOST = HOST.trim();
    if (HOST.endsWith('/')) HOST = HOST.slice(0, -1);

    process.env.CLIENT_JSPTEROAPI_HOST = HOST;
    process.env.CLIENT_JSPTEROAPI_KEY = KEY;
}

module.exports = {
    login: login,
    fastLogin: fastLogin,

    // GET
    getAllServers: getallservers,
    getServerInfo: getserverinfo,
    getServerStatus: getserverstatus,
    isOwner: isowner,
    getCPUUsage: getcpuusage,
    getRAMUsage: getramusage,
    getDiskUsage: getdiskusage,

    // POST
    startServer: startserver,
    stopServer: stopserver,
    killServer: killserver,
    restartServer: restartserver,
    sendCommand: sendcommand,
};
