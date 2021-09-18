import fetch, { RequestInit } from 'node-fetch';
import { JSPteroAPIError, pterodactylError } from '../modules/Error';

export class Request {
    constructor(
        private readonly host: string,
        private readonly key: string,
        private readonly errorHandler: (error: JSPteroAPIError) => void,
    ) {}
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
                'Accept': 'application/vnd.pterodactyl.v1+json',
            },
        };
        if (data) options.body = JSON.stringify(data);
        const rawData = await fetch(URL, options);
        if (!rawData.ok)
            return this.errorHandler(
                new JSPteroAPIError(
                    rawData,
                    (await rawData.json()) as pterodactylError,
                    data,
                    requestType,
                ),
            );
        if (rawData.status == 204) return dataObj;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let res = (await rawData.json()) as any;
        const objArr = dataObj.split('.');
        objArr.forEach((obj) => {
            res = res[obj];
        });
        return res;
    }
}
