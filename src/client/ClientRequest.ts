import fetch, { RequestInit } from 'node-fetch';
import JSPteroAPIError from '../modules/Error';

export default class Request {
    constructor(readonly host: string, readonly key: string) {}
    /**
     * @param {String} requestType The type of request to use e. g. GET, POST
     * @param {Record<string, unknown> | string | unknown | null} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} [text=false] Boolean if we want to return text of the
     *   response. Default is `false`
     */
    public async request(
        requestType: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT',
        data: Record<string, unknown> | string | unknown | null,
        dataObj: string,
        endpoint: string,
        text = false,
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
                data as Record<string, unknown>,
                requestType,
            );
        if (rawData.status == 204) return dataObj;
        if (text) return await rawData.text();
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
