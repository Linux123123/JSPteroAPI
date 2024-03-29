import { fetch, RequestInit } from 'undici';

import { JSPteroAPIError, pterodactylError } from './Error';

export class Request {
  constructor(
    private readonly host: string,
    private readonly key: string,
    private readonly errorHandler: (error: JSPteroAPIError) => void
  ) {}
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
    text = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const URL = this.host + endpoint;
    const options: RequestInit = {
      method: requestType,
      headers: {
        'responseEncoding': 'utf8',
        'Authorization': 'Bearer ' + this.key,
        'Content-Type': `${
          !endpoint.includes('files/write') ? 'application/json' : ''
        }`,
        'Accept': 'application/json'
      }
    };
    if (data && endpoint.includes('files/write')) options.body = data as string;
    if (data && !endpoint.includes('files/write'))
      options.body = JSON.stringify(data);
    const rawData = await fetch(URL, options);
    if (!rawData.ok)
      return this.errorHandler(
        new JSPteroAPIError(
          rawData,
          (await rawData.json()) as pterodactylError,
          data as Record<string, unknown>,
          requestType
        )
      );
    if (rawData.status === 204 || rawData.status === 202) return dataObj;
    if (text) return await rawData.text();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let res = (await rawData.json()) as any;
    if (!dataObj) return res;
    const objArr = dataObj.split('.');
    objArr.forEach((obj) => {
      res = res[obj];
    });
    return res;
  }
}
