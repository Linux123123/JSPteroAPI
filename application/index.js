const fetch = require('node-fetch'); // import node-fetch
const fs = require('fs'); // import fs
const { get } = require('http');
const moduleFiles = fs
    .readdirSync('./application/modules')
    .filter((file) => file.endsWith('.js'));

var moduleDict = {};

/**
 *
 * @param {String} HOST Host to connect to
 * @param {String} KEY Key to use
 * @param {Boolean, String} callback Returns true when login is successful and a error message if API failed
 */

for (const file of moduleFiles) {
    console.log('(JSPteroAPI) Loading module ' + file);
    moduleDict[file] = require(`./modules/${file}`);
}

moduleDict['login'] = async function login(HOST, KEY, callback) {
    function handleErr(err) {
        console.warn(err);
        let resp = new Response(
            JSON.stringify({
                code: 400,
                message: 'Stupid network Error',
            })
        );
        return resp;
    }
    HOST = HOST.trim();
    if (HOST.endsWith('/')) HOST = HOST.slice(0, -1);
    process.env.APPLICATION_NODEACTYL_HOST = HOST;
    process.env.APPLICATION_NODEACTYL_KEY = KEY;
    let response = await (
        await fetch(HOST + '/api/application/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + KEY,
            },
        }).catch(handleErr)
    ).json();
    if (response.code && response.code == 400) {
        //problem
        return;
    }
    console.log(response.data);
    return;
};

module.exports = moduleDict;
