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
     * @param {(Object|String|null)} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} [text=false] Boolean if we want to return text of the response
     */
    async request(request, requestType, data, dataObj, endpoint, text = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
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
        if (data)
            options.body = JSON.stringify(data);
        const rawData = await node_fetch_1.default(URL, options);
        if (!rawData.ok)
            throw myError(rawData, data, request);
        if (rawData.status == 204)
            return dataObj;
        if (text)
            return await rawData.text();
        const res = await rawData.json();
        switch (dataObj) {
            case 'data':
                return res.data;
            case 'attributes':
                return res.attributes;
            case 'attributesUrl':
                return res.attributes.url;
            default:
                return res;
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function myError(rawData, data, request) {
    if (rawData.status == 521) {
        return new Error('Gateway unawailable! Status: 521');
    }
    return new Error(`${rawData.statusText}  Status Code: ${rawData.status}`);
}
exports.default = Request;
