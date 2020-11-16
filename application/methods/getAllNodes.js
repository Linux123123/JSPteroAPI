const req = require('../ApplicationRequest.js');

function getAllNodes() {
    const Req = new req(
        process.env.APPLICATION_JSPTEROAPI_HOST,
        process.env.APPLICATION_JSPTEROAPI_KEY
    );
    return Req.request(
        'getAllNodes',
        'GET',
        null,
        'data',
        '/api/application/nodes',
        false
    );
}

module.exports = getAllNodes;
