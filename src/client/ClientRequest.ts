import fetch, { RequestInit, Response } from 'node-fetch';

class Request {
    constructor(readonly host: string, readonly key: string) {}
    /**
     * @param {String} request The request name
     * @param {String} requestType The type of request to use e. g. GET, POST
     * @param {(Object|String|null)} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} [text=false] Boolean if we want to return text of the response
     */
    public async request(
        request: string,
        requestType: string,
        data: object | string | null,
        dataObj: string,
        endpoint: string,
        text: boolean = false
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
        if (data) options.body = JSON.stringify(data);
        rawData = await fetch(URL, options);
        if (!rawData.ok) throw myError(rawData, data, request);
        if (rawData.status == 204) return dataObj;
        if (text) return await rawData.text();
        res = await rawData.json();
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

function myError(rawData: Response, data: any, request: string) {
    if (rawData.status == 521) {
        return new Error('Gateway unawailable! Status: 521');
    }
    return new Error(`${rawData.statusText}  Status Code: ${rawData.status}`);
}

export default Request;
