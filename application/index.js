const fetch = require('node-fetch'); // import node-fetch
const fs = require('fs'); // import fs
const methodFiles = fs
    .readdirSync('./application/methods')
    .filter((file) => file.endsWith('.js'));

var methodDict = {};

for (const file of methodFiles) {
    console.log('(JSPteroAPI) Loading module ' + file);
    methodDict[file] = require('./methods/' + file);
}

/**
 *
 * @param {String} HOST Panels address
 * @param {String} KEY Api key to use
 * @param {Boolean, String} callback Returns true when login is successful and a error message if API failed
 */

methodDict['login'] = async function login(HOST, KEY, callback) {
    HOST = HOST.trim();
    if (HOST.endsWith('/')) HOST = HOST.slice(0, -1);
    process.env.APPLICATION_NODEACTYL_HOST = HOST;
    process.env.APPLICATION_NODEACTYL_KEY = KEY;
    let data = await fetch(HOST + '/api/application/users', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + KEY,
        },
    }).catch((err) => console.warn(err));
    if (typeof data == 'undefined') {
        return callback(false, 'There is an error trying to access host!');
    } else if (data.status == 404)
        return callback(false, 'API Key is not valid! (Application)!');
    else if (data.status != 200) {
        return callback(false, 'There is an error trying to access host!');
    } else {
        return callback(true);
    }
};

module.exports = methodDict;
