const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server Disk Usage of
 */
function getDiskUsage(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    return Req.request(
        'GET',
        null,
        'disk_bytes',
        '/api/client/servers/' + ServerID + '/resources',
        false
    );
}

module.exports = getDiskUsage;
