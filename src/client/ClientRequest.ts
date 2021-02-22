import fetch, { RequestInit } from 'node-fetch';
import { JSPteroAPIError } from '../modules/Error';

export class Request {
    constructor(readonly host: string, readonly key: string) {}
    /**
     * @param requestType - The type of request to use e. g. GET, POST
     * @param data - Data to send
     * @param dataObj - Data object to return / Text to give on success
     * @param endpoint - Endpoint for server to call
     * @param text - Boolean if we want to return text of the response
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
