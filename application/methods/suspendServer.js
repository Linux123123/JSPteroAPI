const req = require('../ApplicationRequest.js');

/**
 * @param {String} InternalID Internal ID of the server to suspend
 */
function suspendServer(InternalID) {
    const Req = new req(
        process.env.APPLICATION_NODEACTYL_HOST,
        process.env.APPLICATION_NODEACTYL_KEY
    );
    return Req.request(
        'suspendServer',
        'POST',
        null,
        'suspServer',
        '/api/application/servers/' + InternalID + '/suspend',
        false
    );
}

module.exports = suspendServer;
