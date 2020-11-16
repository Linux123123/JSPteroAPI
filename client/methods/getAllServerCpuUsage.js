const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server CPU Usage of
 */
function getCPUUsage(ServerID) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    return Req.request(
        'GET',
        null,
        'cpu_absolute',
        '/api/client/servers/' + ServerID + '/resources'
    );
}

module.exports = getCPUUsage;
