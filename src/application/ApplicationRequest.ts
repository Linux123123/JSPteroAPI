import fetch, { RequestInit } from 'node-fetch';
import JSPteroAPIError from '../modules/Error';

export default class Request {
    constructor(readonly host: string, readonly key: string) {}
    /**
     * @param {String} requestType The type of request to use e. g. GET, POST
     * @param {Record<string, unknown> | null} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     */
    public async request(
        requestType: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT',
        data: Record<string, unknown> | null,
        dataObj: string,
        endpoint: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): Promise<any> {
        const URL = this.host + endpoint;
        const options: RequestInit = {
            method: requestType,
            headers: {
                'responseEncoding': 'utf8',
                'Authorization': 'Bearer ' + this.key,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        if (data) options.body = JSON.stringify(data);
        const rawData = await fetch(URL, options);
        if (!rawData.ok)
            throw new JSPteroAPIError(
                rawData,
                await rawData.json(),
                data,
                requestType,
            );
        if (rawData.status == 204) return dataObj;
        const res = await rawData.json();
        switch (dataObj) {
            case 'data':
                return res.data;
            case 'attributes':
                return res.attributes;
            default:
                return res;
        }
    }
}
