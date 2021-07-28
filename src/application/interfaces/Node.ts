/** @module ApplicationNode */
import { Allocations } from './Allocation';
import { Location } from './Location';
import { Server } from './Server';

export interface NodeIncludeInput {
    allocations?: boolean;
    location?: boolean;
    servers?: boolean;
}

export interface NodeFilterInput {
    filter: string;
    filterBy: 'uuid' | 'name' | 'fqdn' | 'daemon_token_id';
}

export interface NodeConfigSsl {
    enabled: boolean;
    cert: string;
    key: string;
}

export interface NodeConfigApi {
    host: string;
    port: number;
    ssl: NodeConfigSsl;
    upload_limit: number;
}

export interface NodeConfigSftp {
    bind_port: number;
}

export interface NodeConfigSystem {
    data: string;
    sftp: NodeConfigSftp;
}

export interface NodeConfig {
    debug: boolean;
    uuid: string;
    token_id: string;
    token: string;
    api: NodeConfigApi;
    system: NodeConfigSystem;
    allowed_mounts: string[];
    remote: string;
}

export interface NodeAllocatedResources {
    memory: number;
    disk: number;
}

export interface NodeServers {
    object: string;
    data: Server[];
}

export interface NodeRelationships {
    allocations?: Allocations;
    location?: Location;
    servers?: NodeServers;
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
    relationships?: NodeRelationships;
}

export interface Node {
    object: string;
    attributes: NodeAttributes;
}

export interface Nodes {
    object: string;
    data: Node[];
    meta: {
        pagination: {
            total: number;
            count: number;
            per_page: number;
            current_page: number;
            total_pages: number;
        };
    };
}

export interface NodeEditOptions {
    name?: string;
    description?: string;
    locationID?: number;
    fqdn?: string;
    scheme?: 'http' | 'https';
    ram?: number;
    disk?: number;
    isPublic?: boolean;
    daemonPort?: number;
    daemonSFTPPort?: number;
    ramOverAllocate?: number;
    diskOverallocate?: number;
    daemonDir?: string;
    maintenceMode?: boolean;
    maxUploadSize?: number;
    behindProxy?: boolean;
    resetSecret: boolean;
    options?: NodeIncludeInput;
}
