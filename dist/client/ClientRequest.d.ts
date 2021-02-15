declare class Request {
    constructor(host: string, key: string);
    host: string;
    key: string;
    /**
     * @param {String} request The request name
     * @param {String} requestType The type of request to use e. g. GET, POST
     * @param {(Object|null)} data Data to send
     * @param {String} dataObj Data object to return / Text to give on success
     * @param {String} endpoint Endpoint for server to call
     * @param {Boolean} bodyNeeded Bool if body is needed
     */
    request(request: string, requestType: string, data: object | null, dataObj: string, endpoint: string, bodyNeeded: boolean): Promise<any>;
}
export default Request;
//# sourceMappingURL=ClientRequest.d.ts.map