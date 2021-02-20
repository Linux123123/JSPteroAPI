import Allocation, { AllocationIncludeInput } from '../interfaces/Allocation';
export default class allocationMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param {number} nodeId The node id of which you want to get allocations from
     * @param {AllocationIncludeInput} [options] Include information about relationships
     * @returns {Promise<NodeAttributes>} Returns information about node
     * @example
     * ```js
     * const res = await app.getAllAllocations(1) // res = NodeAttributes
     * ```
     * @example
     * ```js
     * app.getAllAllocations(1).then((res) => console.log(res)) // res = NodeAttributes
     * ```
     */
    getAllAllocations: (nodeId: number, options?: AllocationIncludeInput | undefined) => Promise<Allocation[]>;
    /**
     * @param {number} nodeId The node id of which you want to create allocations
     * @param {string} ip IP for the allocation
     * @param {string[]} ports Ports array to add
     * @param {string} alias The alias for this allocation
     * @returns {Promise<string>} If successful returns Successfully created!
     * @example
     * ```js
     * const res = await app.createAllocation(1, undefined, ['25565']) // res = Successfully created!
     * ```
     * @example
     * ```js
     * app.createAllocation(1, undefined, ['25565'], 'minecraft').then((res) => console.log(res)) // res = Successfully created!
     * ```
     */
    createAllocation: (nodeId: number, ip: string | undefined, ports: string[], alias?: string) => Promise<string>;
    /**
     * @param {number} nodeId The node id of which you want to delete allocation
     * @param {number} allocationId The id of allocation to delete
     * @returns {Promise<string>} If successful returns Successfully deleted!
     * @example
     * ```js
     * const res = await app.deleteAllocation(1, 5) // res = Successfully deleted!
     * ```
     * @example
     * ```js
     * app.deleteAllocation(1, 8).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    deleteAllocation: (nodeId: number, allocationId: number) => Promise<string>;
}
