const req = require('../ApplicationRequest.js');

/**
 * @param {String} ServerID The server ID to get the details of.
 */
function getServerInfo(ServerID) {
    const Req = new req(
        process.env.APPLICATION_NODEACTYL_HOST,
        process.env.APPLICATION_NODEACTYL_KEY
    );
    return Req.request(
        'getServerInfo',
        'GET',
        null,
        'attributes',
        '/api/application/servers/' + ServerID,
        false
    );
}

module.exports = getServerInfo;
