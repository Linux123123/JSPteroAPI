const req = require('../ApplicationRequest.js');

/**
 * @param {String} NodeID The node ID to get the details of.
 */
function getNode(NodeID) {
    const Req = new req(
        process.env.APPLICATION_NODEACTYL_HOST,
        process.env.APPLICATION_NODEACTYL_KEY
    );
    return Req.request(
        'getNodeInfo',
        'GET',
        null,
        'data',
        '/api/application/nodes/' + NodeID,
        false
    );
}

module.exports = getNode;
