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

    request(request, requestType, data, dataObj, endpoint, bodyNeeded) {
        const URL = this.host + endpoint;
        const options = {
            method: requestType,
            headers: {
                Authorization: 'Bearer ' + this.key,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        if (bodyNeeded) options.body = data;
        return fetch(URL, options)
            .then((res) => {
                let data = res.json();
                return data;
            })
            .then((data) => {
                switch (dataObj) {
                    case 'data':
                        return data.data;
                    case 'attributes':
                        return data.attributes;
                }
            })
            .catch((err) => {
                throw new myError(err);
            });
    }
}

function checkResponse(res) {
    if (!res.ok) {
        throw new myError(null, res, data, request);
    }
}

function myError(err, res, data, request) {
    if (err == null) {
        let error;
        if (res.status == 521) {
            error = new Error('Gateway unawailable!');
            error.status = 521;
            return error;
        }
        if (
            request == 'CreateUser' ||
            request == 'EditUser' ||
            request == 'GetUserInfo'
        ) {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) == false) {
                error = new Error('The provided email is not a valid.');
                error.status = 422;
                return error;
            } else if (res.status == 422) {
                error = new Error(
                    'User already exists! (Or Email/Username is in use already)'
                );
                error.status = 422;
                return error;
            } else if (res.status == 404) {
                error = new Error('User does not exist!');
                error.status = 404;
                return error;
            } else return `Html error code: ${res.status}`;
        } else return `Html error code: ${res.status}`;
    } else return err;
}

module.exports = Request;
