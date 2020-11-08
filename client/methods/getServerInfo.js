const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to get
 */
function getServerInfo(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    return Req.request(
        'GET',
        null,
        'attributes',
        '/api/client/servers/' + ServerID,
        false
    );
}

module.exports = getServerInfo;
