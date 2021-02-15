"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
class Request {
    constructor(host, key) {
        this.host = host;
        this.key = key;
    }
    /**
     * @param {String} request The request name
     * @param {String} requestType The type of request to use e. g. GET, POST
     * @param {(Object|null)} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} bodyNeeded Bool if body is needed
     */
    async request(request, requestType, data, dataObj, endpoint, bodyNeeded) {
        let rawData;
        let res;
        const URL = this.host + endpoint;
        const options = {
            method: requestType,
            headers: {
                responseEncoding: 'utf8',
                Authorization: 'Bearer ' + this.key,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        if (bodyNeeded)
            options.body = JSON.stringify(data);
        rawData = await node_fetch_1.default(URL, options);
        if (!rawData.ok)
            throw myError(rawData, data, request);
        if (rawData.status != 204)
            res = await rawData.json();
        switch (dataObj) {
            case 'data':
                return res.data;
            case 'attributes':
                return res.attributes;
            case 'sendCommand':
                return 'Successfuly sent!';
            case 'setPowState':
                return 'Successfuly sent!';
            case 'delDB':
                return 'Successfuly deleted!';
            default:
                return res;
        }
    }
}
function myError(rawData, data, request) {
    if (rawData.status == 521) {
        return new Error('Gateway unawailable! Status: 521');
    }
    return new Error(`${rawData.statusText}. Status Code: ${rawData.status}`);
}
exports.default = Request;
