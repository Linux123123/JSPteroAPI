import { Client } from '../index';
import { Allocation } from '../interfaces/Allocation';

export class networkMethods {
    constructor(private readonly client: Client) {}
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @returns Array of allocations
     * @example
     * ```ts
     * const res = await client.getAllAlocations('c2f5a3b6') // res = Allocation[]
     * ```
     * @example
     * ```ts
     * client.getAllAlocations('c2f5a3b6').then((res) => console.log(res)) // res = Allocation[]
     * ```
     */
    public getAllAlocations = (serverId: string): Promise<Allocation[]> => {
        return this.client.request(
            'GET',
            null,
            'data',
            `/api/client/servers/${serverId}/network/allocations`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @remarks This method is only available if auto-assign is enabled
     * @example
     * ```ts
     * const res = await client.assignAllocation('c2f5a3b6') // res = Allocation
     * ```
     * @example
     * ```ts
     * client.assignAllocation('c2f5a3b6').then((res) => console.log(res)) // res = Allocation
     * ```
     */
    public assignAllocation = (serverId: string): Promise<Allocation> => {
        return this.client.request(
            'POST',
            null,
            'attributes',
            `/api/client/servers/${serverId}/network/allocations`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param allocationId - ID of the allocation to set the note for
     * @param note - The note you want to set
     * @example
     * ```ts
     * const res = await client.setAllocationNote('c2f5a3b6', 1, "Port for RDP") // res = Allocation
     * ```
     * @example
     * ```ts
     * client.setAllocationNote('c2f5a3b6', 1, "Port for RDP").then((res) => console.log(res)) // res = Allocation
     * ```
     */
    public setAllocationNote = (
        serverId: string,
        allocationId: number,
        note: string,
    ): Promise<Allocation> => {
        return this.client.request(
            'POST',
            { notes: note },
            'attributes',
            `/api/client/servers/${serverId}/network/allocations/${allocationId}`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param allocationId - ID of the allocation to make primary
     * @example
     * ```ts
     * const res = await client.setAllocationPrimary('c2f5a3b6', 1) // res = Allocation
     * ```
     * @example
     * ```ts
     * client.setAllocationPrimary('c2f5a3b6', 1).then((res) => console.log(res)) // res = Allocation
     * ```
     */
    public setAllocationPrimary = (
        serverId: string,
        allocationId: number,
    ): Promise<Allocation> => {
        return this.client.request(
            'POST',
            null,
            'attributes',
            `/api/client/servers/${serverId}/network/allocations/${allocationId}/primary`,
        );
    };
    /**
     * @param serverId - ID of the server to get (In the settings tab of server/in link)
     * @param allocationId - ID of the allocation to delete
     * @remarks This method is only available if allocation is not primary
     * @example
     * ```ts
     * const res = await client.deleteAllocation('c2f5a3b6', 1) // res = Sucessfully deleted Allocation!
     * ```
     * @example
     * ```ts
     * client.deleteAllocation('c2f5a3b6', 1).then((res) => console.log(res)) // res = Sucessfully deleted Allocation!
     * ```
     */
    public deleteAllocation = (
        serverId: string,
        allocationId: number,
    ): Promise<string> => {
        return this.client.request(
            'DELETE',
            null,
            'Sucessfully deleted Allocation!',
            `/api/client/servers/${serverId}/network/allocations/${allocationId}`,
        );
    };
}
