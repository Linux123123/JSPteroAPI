"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
const Functions_1 = __importDefault(require("../../modules/Functions"));
class nestMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
        /**
         * @param {NestIncludeInput} [options] Include information about: eggs or servers
         * @returns {Promise<Nest[]>} Array of nests
         * @example
         * ```js
         * const res = await app.getAllNests() // res = Nest[]
         * ```
         * @example
         * ```js
         * app.getAllNests().then((res) => console.log(res)) // res = Nest[]
         * ```
         */
        this.getAllNests = async (options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'data', `/api/application/nests${Functions_1.default(options)}`);
        };
        /**
         * @param {number} nestId The nest ID to get the details of.
         * @param {NestIncludeInput} [options] Include information about: eggs or servers
         * @returns {Promise<NestAttributes>} Nest details
         * @example
         * ```js
         * const res = await app.getNestInfo(1) // res = NestAttributes
         * ```
         * @example
         * ```js
         * app.getNestInfo(1).then((res) => console.log(res)) // res = NestAttributes
         * ```
         */
        this.getNestInfo = async (nestId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/application/nests/${nestId}${Functions_1.default(options)}`);
        };
        /**
         * @param {number} nestId The nest ID to get the details of.
         * @param {EggIncludeInput} [options] Include information about: nest or servers or variables
         * @returns {Promise<Egg[]>}
         * @example
         * ```js
         * const res = await app.getEggInfo(1, 1) // res = EggAttributes
         * ```
         * @example
         * ```js
         * app.getEggInfo(1, 1).then((res) => console.log(res)) // res = EggAttributes
         * ```
         */
        this.getAllNestEggs = async (nestId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'data', `/api/application/nests/${nestId}/eggs${Functions_1.default(options)}`);
        };
        /**
         * @param {number} nestId The nest ID to get the details of.
         * @param {number} eggId Egg ID to use when installing the server
         * @param {EggIncludeInput} [options] Include information about: nest or servers or variables
         * @returns {Promise<EggAttributes>}
         * @example
         * ```js
         * const res = await app.getEggInfo(1, 1) // res = EggAttributes
         * ```
         * @example
         * ```js
         * app.getEggInfo(1, 1).then((res) => console.log(res)) // res = EggAttributes
         * ```
         */
        this.getEggInfo = async (nestID, eggId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/application/nests/${nestID}/eggs/${eggId}${Functions_1.default(options)}`);
        };
    }
}
exports.default = nestMethods;
