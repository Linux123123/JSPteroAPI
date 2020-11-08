const req = require('../ClientRequest.js');

/**
 * @yields A Array of servers a application key has access to
 */
function getAllServers() {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    return Req.request('GET', null, 'data', '/api/client', false);
}

module.exports = getAllServers;
