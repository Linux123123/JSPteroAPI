const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to restart
 */
function restartServer(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    const data = { signal: 'restart' };
    return Req.request(
        'POST',
        data,
        'restartServer',
        '/api/client/servers/' + ServerID + '/power',
        true
    );
}

module.exports = restartServer;
