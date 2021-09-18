import { makeOptions, MakeOpts, paginate } from '../../modules/Functions';
import {
    Allocation,
    AllocationIncludeInput,
    Allocations,
} from '../interfaces/Allocation';
import { Application } from '../index';

export class allocationMethods {
    constructor(private readonly application: Application) {}
    /**
     * @internal
     */
    private getAllocations = async (
        nodeId: number,
        options: MakeOpts,
    ): Promise<Allocations> => {
        return this.application.request(
            'GET',
            null,
            '',
            `/api/application/nodes/${nodeId}/allocations${makeOptions(
                options,
            )}`,
        );
    };
    /**
     * @param nodeId - The node id of which you want to get allocations from
     * @param options - Include information about relationships
     * @returns Returns information about node
     * @example
     * ```ts
     * const res = await app.getAllAllocations(1) // res = NodeAttributes
     * ```
     * @example
     * ```ts
     * app.getAllAllocations(1).then((res) => console.log(res)) // res = NodeAttributes
     * ```
     */
    public getAllAllocations = async (
        nodeId: number,
        options?: AllocationIncludeInput,
    ): Promise<Allocation[]> => {
        return await paginate<Allocation>(
            this.getAllocations.bind(this, nodeId),
            {
                includes: { ...options },
            },
        );
    };
    /**
     * @param nodeId - The node id of which you want to create allocations
     * @param ports - Ports array to add
     * @param alias - The alias for this allocation
     * @param ip - IP for the allocation
     * @returns If successful returns Successfully created!
     * @example
     * ```ts
     * const res = await app.createAllocation(1, ['25565']) // res = Successfully created!
     * ```
     * @example
     * ```ts
     * app.createAllocation(1, ['25565'], 'minecraft').then((res) => console.log(res)) // res = Successfully created!
     * ```
     */
    public createAllocation = async (
        nodeId: number,
        ports: string[],
        alias = '',
        ip = '0.0.0.0',
    ): Promise<string> => {
        return this.application.request(
            'POST',
            {
                ip: ip,
                ports: ports,
                allocation_alias: alias,
            },
            'Successfully created!',
            `/api/application/nodes/${nodeId}/allocations`,
        );
    };
    /**
     * @param nodeId - The node id of which you want to delete allocation
     * @param allocationId - The id of allocation to delete
     * @returns If successful returns Successfully deleted!
     * @example
     * ```ts
     * const res = await app.deleteAllocation(1, 5) // res = Successfully deleted!
     * ```
     * @example
     * ```ts
     * app.deleteAllocation(1, 8).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    public deleteAllocation = async (
        nodeId: number,
        allocationId: number,
    ): Promise<string> => {
        return this.application.request(
            'DELETE',
            null,
            'Successfully deleted!',
            `/api/application/nodes/${nodeId}/allocations/${allocationId}`,
        );
    };
}
