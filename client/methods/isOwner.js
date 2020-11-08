const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to check owner value of
 */
function isOwner(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    return Req.request(
        'GET',
        null,
        'attributes.server_owner',
        '/api/client/servers/' + ServerID,
        false
    );
}

module.exports = isOwner;
