const fetch = require('node-fetch');

class Request {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }

    /**
     * @param {String} request The request name
     * @param {String} requestType Thr type of request to use e. g. GET, POST
     * @param {Object} data Data to send
     * @param {String} dataObj Data object to return
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} bodyNeeded Bool if body is needed
     */

    request(requestType, data, dataObj, endpoint, bodyNeeded) {
        const URL = this.host + endpoint;
        const options = {
            method: requestType,
            responseEncoding: 'utf8',
            headers: {
                Authorization: 'Bearer ' + this.key,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        if (bodyNeeded) options.body = JSON.stringify(data);

        return fetch(URL, options)
            .then((rawData) => {
                if (!rawData.ok) {
                    throw new myError(null, rawData);
                } else return rawData;
            })
            .then((rawData) => {
                if (rawData.status != 204) {
                    let res = rawData.json();
                    return res;
                }
            })
            .then((res) => {
                switch (dataObj) {
                    case 'data':
                        return res.data;
                    case 'attributes':
                        return res.attributes;
                    case 'attributes.current_state':
                        return res.attributes.current_state;
                    case 'attributes.server_owner':
                        return res.attributes.server_owner;
                    case 'cpu_absolute':
                        return res.attributes.resources.cpu_absolute;
                    case 'disk_bytes':
                        return res.attributes.resources.disk_bytes;
                    case 'memory_bytes':
                        return res.attributes.resources.memory_bytes;
                    default:
                        return res;
                }
            })
            .catch((error) => {
                throw new myError(error, null);
            });
    }
}

function myError(err, rawData) {
    if (err == null || err == '') {
        let error;
        if (rawData.status == 521) {
            error = new Error('Gateway unawailable!');
            error.status = 521;
            return error;
        } else return new Error(`Html error code: ${rawData.status}`);
    } else return new Error(err);
}

module.exports = Request;
