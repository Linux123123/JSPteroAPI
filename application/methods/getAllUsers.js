const req = require('../ApplicationRequest.js');

function getAllUsers() {
    const Req = new req(
        process.env.APPLICATION_NODEACTYL_HOST,
        process.env.APPLICATION_NODEACTYL_KEY
    );
    return Req.request(
        'getAllUsers',
        'GET',
        null,
        'data',
        '/api/application/users',
        false
    );
}

module.exports = getAllUsers;
