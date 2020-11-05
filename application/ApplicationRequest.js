const fetch = require('node-fetch');

class Request {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }

    async request(request, data) {
        const URL = getUrl(request, this.host, data);
        const method = getMethod(request);
        const options = {
            method: method,
            headers: {
                Authorization: 'Bearer ' + this.key,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: data,
        };
        let respData = await fetch(URL, options).catch((err) =>
            error(err, 'Fetch failed! Check you HOST address!', 400)
        );

        if (typeof respData == 'undefined')
            return error(
                'No response.',
                'Fetch failed! Check you HOST address!',
                400
            );

        if (respData.status == 521)
            return error('', 'Gateway unawailable!', respData.status);

        if (
            request == 'createUser' ||
            request == 'editUser' ||
            request == 'getUserInfo'
        ) {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) == false) {
                return error(
                    '',
                    'The provided email is not a valid.',
                    respData.status
                );
            } else if (respData.status == 422) {
                return error(
                    '',
                    'User already exists! (Or Email/Username is in use already)',
                    respData.status
                );
            } else if (respData.status == 404) {
                return error('', 'User does not exist!', respData.status);
            }
        }
        let response = await respData.json();

        console.log(response.data);
    }
}

const server = ['createServer', 'getAllServers'];
const users = ['createUser', 'getAllUsers'];
const user = ['editUser', 'deleteUser', 'getUserInfo'];
const nodes = ['getAllNodes', 'createNode'];
const node = ['getNodeInfo', 'deleteNode'];
function getUrl(request, host, data) {
    if (user.indexOf(request) > -1) {
        return host + '/api/application/users/' + data;
    } else if (server.indexOf(request) > -1) {
        return host + '/api/application/servers';
    } else if (users.indexOf(request) > -1) {
        return host + '/api/application/users';
    } else if (node.indexOf(request) > -1) {
        return host + '/api/application/nodes/' + data;
    } else if (nodes.indexOf(request) > -1) {
        return host + '/api/application/nodes';
    } else if (request == 'SuspendServer') {
        return host + '/api/application/servers/' + data + '/suspend';
    } else if (request == 'UnSuspendServer') {
        return host + '/api/application/servers/' + data + '/unsuspend';
    } else if (request == 'DeleteServer') {
        return host + '/api/application/servers/' + data;
    }
}

function getMethod(request) {
    switch (request[0]) {
        case 'g':
            return 'GET';
        case 'c':
            return 'POST';
        case 'd':
            return 'DELETE';
        case 'e':
            return 'PATCH';
    }
}

function error(err, msg, code) {
    return console.error({
        message: msg,
        error: err,
        code: code,
    });
}

module.exports = Request;
