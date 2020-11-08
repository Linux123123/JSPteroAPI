const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server status to get
 */
function getServerStatus(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    return Req.request(
        'GET',
        null,
        'attributes.current_state',
        '/api/client/servers/' + ServerID + '/resources',
        false
    );
}

module.exports = getServerStatus;
