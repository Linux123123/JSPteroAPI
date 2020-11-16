const req = require('../ApplicationRequest.js');

function getAllServers() {
    const Req = new req(
        process.env.APPLICATION_JSPTEROAPI_HOST,
        process.env.APPLICATION_JSPTEROAPI_KEY
    );
    return Req.request(
        'getAllServers',
        'GET',
        null,
        'data',
        '/api/application/servers',
        false
    );
}

module.exports = getAllServers;
