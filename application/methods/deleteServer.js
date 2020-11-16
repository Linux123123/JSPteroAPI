const req = require('../ApplicationRequest.js');

/**
 * @param {String} InternalID Internal ID of the server to delete
 */
function deleteServer(InternalID) {
    const Req = new req(
        process.env.APPLICATION_JSPTEROAPI_HOST,
        process.env.APPLICATION_JSPTEROAPI_KEY
    );
    return Req.request(
        'deleteServer',
        'DELETE',
        null,
        'delServer',
        '/api/application/servers/' + InternalID,
        false
    );
}

module.exports = deleteServer;
