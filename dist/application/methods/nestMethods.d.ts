import { Egg, EggAttributes } from '../interfaces/Egg';
import { Nest, EggIncludeInput, NestAttributes, NestIncludeInput } from '../interfaces/Nest';
export declare class nestMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param options - Include information about: eggs or servers
     * @returns Array of nests
     * @example
     * ```ts
     * const res = await app.getAllNests() // res = Nest[]
     * ```
     * @example
     * ```ts
     * app.getAllNests().then((res) => console.log(res)) // res = Nest[]
     * ```
     */
    getAllNests: (options?: NestIncludeInput | undefined) => Promise<Nest[]>;
    /**
     * @param nestId - The nest ID to get the details of.
     * @param options - Include information about: eggs or servers
     * @returns Nest details
     * @example
     * ```ts
     * const res = await app.getNestInfo(1) // res = NestAttributes
     * ```
     * @example
     * ```ts
     * app.getNestInfo(1).then((res) => console.log(res)) // res = NestAttributes
     * ```
     */
    getNestInfo: (nestId: number, options?: NestIncludeInput | undefined) => Promise<NestAttributes>;
    /**
     * @param nestId - The nest ID to get the details of.
     * @param options - Include information about: nest or servers or variables
     * @returns
     * @example
     * ```ts
     * const res = await app.getEggInfo(1, 1) // res = EggAttributes
     * ```
     * @example
     * ```ts
     * app.getEggInfo(1, 1).then((res) => console.log(res)) // res = EggAttributes
     * ```
     */
    getAllNestEggs: (nestId: number, options?: EggIncludeInput | undefined) => Promise<Egg[]>;
    /**
     * @param nestId - The nest ID to get the details of.
     * @param eggId - Egg ID to use when installing the server
     * @param options - Include information about: nest or servers or variables
     * @returns
     * @example
     * ```ts
     * const res = await app.getEggInfo(1, 1) // res = EggAttributes
     * ```
     * @example
     * ```ts
     * app.getEggInfo(1, 1).then((res) => console.log(res)) // res = EggAttributes
     * ```
     */
    getEggInfo: (nestID: number, eggId: number, options?: EggIncludeInput | undefined) => Promise<EggAttributes>;
}
