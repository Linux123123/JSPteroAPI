const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to send a command to
 * @param {String} Command Command to send
 */
function sendCommand(ServerID, Command) {
    const Req = new req(
        process.env.CLIENT_JSPTEROAPI_HOST,
        process.env.CLIENT_JSPTEROAPI_KEY
    );
    const data = { command: Command };
    return Req.request(
        'POST',
        data,
        'sendCommand',
        '/api/client/servers/' + ServerID + '/command',
        true
    );
}

module.exports = sendCommand;
