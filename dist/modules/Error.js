"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JSPteroAPIError extends Error {
    constructor(rawData, JSONData, data, requestType) {
        super();
        this.HTML_URL = rawData.url;
        this.HTML_STATUS = rawData.status;
        this.HTML_STATUS_TEXT = rawData.statusText;
        this.REQUEST_TYPE = requestType;
        if (data)
            this.REQUEST_BODY = data;
        const errors = [];
        JSONData.errors.forEach((element) => {
            errors.push(element.detail);
        });
        this.ERRORS = errors;
    }
}
exports.default = JSPteroAPIError;
