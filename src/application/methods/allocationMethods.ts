import Request from '../ApplicationRequest';
import makeIncludes from '../../modules/Functions';
import Allocation, { AllocationIncludeInput } from '../interfaces/Allocation';

export default class allocationMethods {
    public constructor(private host: string, private key: string) {}
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
    public getAllAllocations = async (
        nodeId: number,
        options?: AllocationIncludeInput,
    ): Promise<Allocation[]> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/application/nodes/${nodeId}/allocations${makeIncludes(
                options,
            )}`,
        );
    };
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
    public createAllocation = async (
        nodeId: number,
        ip = '0.0.0.0',
        ports: string[],
        alias = '',
    ): Promise<string> => {
        return new Request(this.host, this.key).request(
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
    public deleteAllocation = async (
        nodeId: number,
        allocationId: number,
    ): Promise<string> => {
        return new Request(this.host, this.key).request(
            'DELETE',
            null,
            'Successfully deleted!',
            `/api/application/nodes/${nodeId}/allocations/${allocationId}`,
        );
    };
}
