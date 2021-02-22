import { Request } from '../ApplicationRequest';
import { makeIncludes } from '../../modules/Functions';
import { Egg, EggAttributes } from '../interfaces/Egg';
import {
    Nest,
    EggIncludeInput,
    NestAttributes,
    NestIncludeInput,
} from '../interfaces/Nest';

export class nestMethods {
    public constructor(private host: string, private key: string) {}
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
