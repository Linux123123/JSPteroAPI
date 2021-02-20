import Request from '../ApplicationRequest';
import makeIncludes from '../../modules/Functions';
import Egg, { EggAttributes } from '../interfaces/Egg';
import Nest, {
    EggIncludeInput,
    NestAttributes,
    NestIncludeInput,
} from '../interfaces/Nest';

export default class nestMethods {
    public constructor(private host: string, private key: string) {}
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
    public getAllNests = async (
        options?: NestIncludeInput,
    ): Promise<Nest[]> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/application/nests${makeIncludes(options)}`,
        );
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
    public getNestInfo = async (
        nestId: number,
        options?: NestIncludeInput,
    ): Promise<NestAttributes> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/application/nests/${nestId}${makeIncludes(options)}`,
        );
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
    public getAllNestEggs = async (
        nestId: number,
        options?: EggIncludeInput,
    ): Promise<Egg[]> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/application/nests/${nestId}/eggs${makeIncludes(options)}`,
        );
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
    public getEggInfo = async (
        nestID: number,
        eggId: number,
        options?: EggIncludeInput,
    ): Promise<EggAttributes> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/application/nests/${nestID}/eggs/${eggId}${makeIncludes(
                options,
            )}`,
        );
    };
}
