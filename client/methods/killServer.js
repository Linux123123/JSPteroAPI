const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to kill
 */
function killServer(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    const data = { signal: 'kill' };
    return Req.request(
        'POST',
        data,
        'killServer',
        '/api/client/servers/' + ServerID + '/power',
        true
    );
}

module.exports = killServer;
