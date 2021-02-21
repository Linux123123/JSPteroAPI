import Allocation, { AllocationIncludeInput } from '../interfaces/Allocation';
export default class allocationMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getAllAllocations: (nodeId: number, options?: AllocationIncludeInput | undefined) => Promise<Allocation[]>;
    /**
     * @param nodeId - The node id of which you want to create allocations
     * @param ip - IP for the allocation
     * @param ports - Ports array to add
     * @param alias - The alias for this allocation
     * @returns If successful returns Successfully created!
     * @example
     * ```ts
     * const res = await app.createAllocation(1, undefined, ['25565']) // res = Successfully created!
     * ```
     * @example
     * ```ts
     * app.createAllocation(1, undefined, ['25565'], 'minecraft').then((res) => console.log(res)) // res = Successfully created!
     * ```
     */
    createAllocation: (nodeId: number, ip: string | undefined, ports: string[], alias?: string) => Promise<string>;
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
    deleteAllocation: (nodeId: number, allocationId: number) => Promise<string>;
}
