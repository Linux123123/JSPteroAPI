const req = require('../ApplicationRequest.js');

function getUserInfo(UserID) {
    const Req = new req(
        process.env.APPLICATION_NODEACTYL_HOST,
        process.env.APPLICATION_NODEACTYL_KEY
    );
    return Req.request(
        'getUserInfo',
        'GET',
        null,
        'attributes',
        '/api/application/users/' + UserID,
        false
    );
}

module.exports = getUserInfo;
