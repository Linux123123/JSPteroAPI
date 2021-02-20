import Egg, { EggAttributes } from '../interfaces/Egg';
import Nest, { EggIncludeInput, NestAttributes, NestIncludeInput } from '../interfaces/Nest';
export default class nestMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getAllNests: (options?: NestIncludeInput | undefined) => Promise<Nest[]>;
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
    getNestInfo: (nestId: number, options?: NestIncludeInput | undefined) => Promise<NestAttributes>;
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
    getAllNestEggs: (nestId: number, options?: EggIncludeInput | undefined) => Promise<Egg[]>;
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
    getEggInfo: (nestID: number, eggId: number, options?: EggIncludeInput | undefined) => Promise<EggAttributes>;
}
