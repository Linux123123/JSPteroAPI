const req = require('../ApplicationRequest.js');

function getAllUsers() {
    const Req = new req(
        process.env.APPLICATION_NODEACTYL_HOST,
        process.env.APPLICATION_NODEACTYL_KEY
    );
    return Req.request('getAllUsers', null);
}

module.exports = getAllUsers;
