import fetch, { RequestInit, Response } from 'node-fetch';

class Request {
    constructor(host: string, key: string) {
        this.host = host;
        this.key = key;
    }
    public host: string;
    public key: string;

    /**
     * @param {String} request The request name
     * @param {String} requestType The type of request to use e. g. GET, POST
     * @param {(Object|null)} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} bodyNeeded Bool if body is needed
     */

    public async request(
        request: string,
        requestType: string,
        data: object | null,
        dataObj: string,
        endpoint: string,
        bodyNeeded: boolean
    ): Promise<any> {
        let rawData: Response;
        let res: any;
        const URL = this.host + endpoint;
        const options: RequestInit = {
            method: requestType,
            headers: {
                responseEncoding: 'utf8',
                Authorization: 'Bearer ' + this.key,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        if (bodyNeeded) options.body = JSON.stringify(data);
        rawData = await fetch(URL, options);
        if (!rawData.ok) throw myError(rawData, data, request);
        if (rawData.status != 204) res = await rawData.json();
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

function myError(rawData: Response, data: any, request: string) {
    if (rawData.status == 521) {
        return new Error('Gateway unawailable! Status: 521');
    }
    return new Error(`${rawData.statusText}. Status Code: ${rawData.status}`);
}

export default Request;
