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
                return await res.data;
            case 'attributes':
                return await res.attributes;
            case 'suspServer':
                return 'Server suspended succesfully!';
            case 'unSuspServer':
                return 'Server unsuspended succesfully!';
            case 'delServer':
                return 'Server deleted succesfully!';
            case 'delUser':
                return 'User deleted succesfully!';
            case 'delNode':
                return 'Node deleted succesfully!';
            default:
                return await res;
        }
    }
}
function myError(rawData, data, request) {
    if (rawData.status == 521) {
        return new Error('Gateway unawailable! Status: 521');
    }
    if (request == 'createServer' || request == 'createUser') {
        if (rawData.status == 422) {
            return new Error('The provided data is invalid! Status: 422');
        }
    }
    if (request == 'createUser' ||
        request == 'editUser' ||
        request == 'getUserInfo') {
        if (data.email) {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) == false) {
                return new Error('The provided email is not a valid. Status: 422');
            }
        }
        else if (rawData.status == 422) {
            return new Error('User already exists! (Or Email/Username is in use already) Status: 422');
        }
        else if (rawData.status == 404) {
            return new Error('User does not exist! Status: 404');
        }
    }
    return new Error(`${rawData.statusText}. Code: ${rawData.status}`);
}
exports.default = Request;
