import Request from '../ApplicationRequest';
import makeIncludes from '../../modules/Functions';
import Allocation, { AllocationIncludeInput } from '../interfaces/Allocation';
export default class allocationMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @example
     *   const res = await app.getAllAllocations(1); // res = NodeAttributes
     *
     * @example
     *   app.getAllAllocations(1).then((res) => console.log(res)); // res = NodeAttributes
     *
     * @param {Number} nodeId The node id of which you want to get allocations from
     * @param {AllocationIncludeInput} [options] Include information about relationships
     * @returns {Promise<NodeAttributes>} Returns information about node
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
     * @example
     *   const res = await app.createAllocation(1, undefined, ['25565']); // res = Successfully created!
     *
     * @example
     *   app.createAllocation(
     *       1,
     *       undefined,
     *       ['25565'],
     *       'minecraft',
     *   ).then((res) => console.log(res)); // res = Successfully created!
     *
     * @param {Number} nodeId The node id of which you want to create allocations
     * @param {String} ip IP for the allocation
     * @param {String[]} ports Ports array to add
     * @param {String} alias The alias for this allocation
     * @returns {Promise<string>} If successful returns Successfully created!
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
     * @example
     *   const res = await app.deleteAllocation(1, 5); // res = Successfully deleted!
     *
     * @example
     *   app.deleteAllocation(1, 8).then((res) => console.log(res)); // res = Successfully deleted!
     *
     * @param {Number} nodeId The node id of which you want to delete allocation
     * @param {Number} allocationId The id of allocation to delete
     * @returns {Promise<string>} If successful returns Successfully deleted!
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
