const req = require('../ApplicationRequest.js');

function getEggInfo(nestID, eggId) {
    const Req = new req(
        process.env.APPLICATION_JSPTEROAPI_HOST,
        process.env.APPLICATION_JSPTEROAPI_KEY
    );
    return Req.request(
        'getNodeInfo',
        'GET',
        null,
        'attributes',
        `/api/application/nests/${nestID}/eggs/${eggId}`,
        false
    );
}

module.exports = getEggInfo;
