import { Response } from 'node-fetch';
interface pterodactylError {
    errors: [
        {
            code: string;
            status: string;
            detail: string;
        }
    ];
}
export declare class JSPteroAPIError extends Error {
    constructor(rawData: Response, JSONData: pterodactylError, data: Record<string, unknown> | string | null, requestType: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT');
    HTML_URL: string;
    HTML_STATUS: number;
    HTML_STATUS_TEXT: string;
    REQUEST_TYPE: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    REQUEST_BODY: Record<string, unknown> | string;
    ERRORS: string[];
}
export {};
