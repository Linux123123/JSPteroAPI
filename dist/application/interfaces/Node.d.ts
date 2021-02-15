export interface NodeAllocatedResources {
    memory: number;
    disk: number;
}
export interface NodeAttributes {
    id: number;
    uuid: string;
    public: boolean;
    name: string;
    description: null | string;
    location_id: number;
    fqdn: string;
    scheme: string;
    behind_proxy: boolean;
    maintenance_mode: boolean;
    memory: number;
    memory_overallocate: number;
    disk: number;
    disk_overallocate: number;
    upload_size: number;
    daemon_listen: number;
    daemon_sftp: number;
    daemon_base: string;
    created_at: string;
    updated_at: string;
    allocated_resources: NodeAllocatedResources;
}
export default interface Node {
    object: string;
    attributes: NodeAttributes;
}
//# sourceMappingURL=Node.d.ts.map