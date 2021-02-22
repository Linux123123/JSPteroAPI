import { Response } from 'node-fetch';

interface pterodactylError {
    errors: [
        {
            code: string;
            status: string;
            detail: string;
        },
    ];
}

export class JSPteroAPIError extends Error {
    constructor(
        rawData: Response,
        JSONData: pterodactylError,
        data: Record<string, unknown> | string | null,
        requestType: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT',
    ) {
        super();
        this.HTML_URL = rawData.url;
        this.HTML_STATUS = rawData.status;
        this.HTML_STATUS_TEXT = rawData.statusText;
        this.REQUEST_TYPE = requestType;
        if (data) this.REQUEST_BODY = data;
        const errors: string[] = [];
        JSONData.errors.forEach((element) => {
            errors.push(element.detail);
        });
        this.ERRORS = errors;
    }
    public HTML_URL: string;
    public HTML_STATUS: number;
    public HTML_STATUS_TEXT: string;
    public REQUEST_TYPE: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    public REQUEST_BODY!: Record<string, unknown> | string;
    public ERRORS: string[];
}
