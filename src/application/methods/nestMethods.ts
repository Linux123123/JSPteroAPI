import { makeOptions, MakeOpts, paginate } from '../../modules/Functions';
import { Egg, EggAttributes } from '../interfaces/Egg';
import {
    Nest,
    EggIncludeInput,
    NestAttributes,
    NestIncludeInput,
    Nests,
} from '../interfaces/Nest';
import { Application } from '..';

export class nestMethods {
    constructor(private readonly application: Application) {}
    /**
     * @internal
     */
    private getNests = async (options: MakeOpts): Promise<Nests> => {
        return this.application.request(
            'GET',
            null,
            '',
            `/api/application/nests${makeOptions(options)}`,
        );
    };
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
        return await paginate<Nest>(this.getNests.bind(this), {
            includes: { ...options },
        });
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
        return this.application.request(
            'GET',
            null,
            'attributes',
            `/api/application/nests/${nestId}${makeOptions({
                includes: { ...options },
            })}`,
        );
    };
    /**
     * @param nestId - The nest ID to get the details of.
     * @param options - Include information about: nest or servers or variables
     * @returns
     * @example
     * ```ts
     * const res = await app.getAllNestEggs(1) // res = Egg[]
     * ```
     * @example
     * ```ts
     * app.getAllNestEggs(1).then((res) => console.log(res)) // res = Egg[]
     * ```
     */
    public getAllNestEggs = async (
        nestId: number,
        options?: EggIncludeInput,
    ): Promise<Egg[]> => {
        return this.application.request(
            'GET',
            null,
            'data',
            `/api/application/nests/${nestId}/eggs${makeOptions({
                includes: { ...options },
            })}`,
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
        return this.application.request(
            'GET',
            null,
            'attributes',
            `/api/application/nests/${nestID}/eggs/${eggId}${makeOptions({
                includes: { ...options },
            })}`,
        );
    };
}
