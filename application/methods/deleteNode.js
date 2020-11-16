const req = require('../ApplicationRequest.js');

/**
 *
 * @param {String} NodeID The node ID to delete
 */
function deleteNode(NodeID) {
    const Req = new req(
        process.env.APPLICATION_JSPTEROAPI_HOST,
        process.env.APPLICATION_JSPTEROAPI_KEY
    );
    return Req.request(
        'deleteNode',
        'DELETE',
        null,
        'delNode',
        '/api/application/nodes/' + NodeID,
        false
    );
}

module.exports = deleteNode;
