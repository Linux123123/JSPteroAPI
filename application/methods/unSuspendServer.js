const req = require('../ApplicationRequest.js');

/**
 * @param {String} InternalID Internal ID of the server to unsuspend
 */
function unSuspendServer(InternalID) {
    const Req = new req(
        process.env.APPLICATION_JSPTEROAPI_HOST,
        process.env.APPLICATION_JSPTEROAPI_KEY
    );
    return Req.request(
        'unSuspendServer',
        'POST',
        null,
        'unSuspServer',
        '/api/application/servers/' + InternalID + '/unsuspend',
        false
    );
}

module.exports = unSuspendServer;
