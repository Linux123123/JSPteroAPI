const fetch = require('node-fetch'); // import node-fetch
const fs = require('fs'); // import fs
const moduleFiles = fs
    .readdirSync('./application/modules')
    .filter((file) => file.endsWith('.js'));

var moduleDict = {};

/**
 *
 * @param {String} HOST Panels address
 * @param {String} KEY Api key to use
 * @param {Boolean, String} callback Returns true when login is successful and a error message if API failed
 */

for (const file of moduleFiles) {
    console.log('(JSPteroAPI) Loading module ' + file);
    moduleDict[file] = require(`./modules/${file}`);
}

moduleDict['login'] = async function login(HOST, KEY, callback) {
    HOST = HOST.trim();
    if (HOST.endsWith('/')) HOST = HOST.slice(0, -1);
    process.env.APPLICATION_NODEACTYL_HOST = HOST;
    process.env.APPLICATION_NODEACTYL_KEY = KEY;
    let data = await await fetch(HOST + '/api/application/users', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + KEY,
        },
    }).catch((err) => console.error(err));
    if (data.status == 404)
        callback(false, 'API Key is not valid! (Application)!');
    else if (data.status != 200) {
        callback(false, 'There has been an error while trying to access host!');
    } else {
        response = await data.json();
        console.log(response.data);
    }

    return;
};

module.exports = moduleDict;
