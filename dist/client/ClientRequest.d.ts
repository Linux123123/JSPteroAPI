export default class Request {
    readonly host: string;
    readonly key: string;
    constructor(host: string, key: string);
    /**
     * @param {String} requestType The type of request to use e. g. GET, POST
     * @param {(Record<string, unknown>|string|unknown|null)} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} [text=false] Boolean if we want to return text of the response
     */
    request(requestType: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT', data: Record<string, unknown> | string | unknown | null, dataObj: string, endpoint: string, text?: boolean): Promise<any>;
}
