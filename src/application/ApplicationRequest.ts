import fetch, { RequestInit } from 'node-fetch';
import { JSPteroAPIError } from '../modules/Error';

export class Request {
    constructor(readonly host: string, readonly key: string) {}
    /**
     * @param requestType - The type of request to use e. g. GET, POST
     * @param data - Data to send
     * @param dataObj - Data object to return / Text to give on success
     * @param endpoint - Endpoint for server to call
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
        return res[dataObj] || res;
    }
}
