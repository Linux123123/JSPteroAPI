/**
 * The main entrypoint for the API
 * @module JSPteroAPI
 * @category Main
 */
import { Application } from './application/index';
import { Client } from './client/index';
import { JSPteroAPIError } from './modules/Error';
export { Application, Client, JSPteroAPIError };
export default {
    Application,
    Client,
};
