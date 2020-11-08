const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to stop
 */
function stopServer(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    const data = { signal: 'stop' };
    return Req.request(
        'POST',
        data,
        'stopServer',
        '/api/client/servers/' + ServerID + '/power',
        true
    );
}

module.exports = stopServer;
