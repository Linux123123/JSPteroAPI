const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to start
 */
function startServer(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    const data = { signal: 'start' };
    return Req.request(
        'POST',
        data,
        'startServer',
        '/api/client/servers/' + ServerID + '/power',
        true
    );
}

module.exports = startServer;
