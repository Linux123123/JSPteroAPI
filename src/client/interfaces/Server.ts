export interface ServerSftpDetails {
    ip: string;
    port: number;
}

export interface ServerIncludeInput {
    egg?: boolean;
    subusers?: boolean;
}

export interface ServerLimits {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
}

export interface ServerFeatureLimits {
    databases: number;
    allocations: number;
    backups: number;
}

export interface ServerEggAttributes {
    uuid: string;
    name: string;
}

export interface ServerEgg {
    object: string;
    attributes: ServerEggAttributes;
}

export interface ServerSubuserAttributes {
    'uuid': string;
    'username': string;
    'email': string;
    'image': string;
    '2fa_enabled': boolean;
    'created_at': string;
    'permissions': string[];
}

export interface ServerSubuser {
    object: string;
    attributes: ServerSubuserAttributes;
}

export interface ServerSubusers {
    object: string;
    data: ServerSubuser[];
}

export interface ServerRelationships {
    allocations?: ServerAllocations;
    variables?: ServerVariables;
    egg?: ServerEgg;
    subusers?: ServerSubusers;
}

export interface ServerAllocations {
    object: string;
    data: ServerAllocation[];
}

export interface ServerAllocation {
    object: string;
    attributes: ServerAllocationAttributes;
}

export interface ServerAllocationAttributes {
    id: number;
    ip: string;
    ip_alias: string;
    port: number;
    notes: string;
    is_default: boolean;
}

export interface ServerVariables {
    object: string;
    data: ServerVariable[];
}

export interface ServerVariable {
    object: string;
    attributes: ServerVariableAttributes;
}

export interface ServerVariableAttributes {
    name: string;
    description: string;
    env_variable: string;
    default_value: string;
    server_value: string;
    is_editable: boolean;
    rules: string;
}

export interface ServerAttributes {
    server_owner: boolean;
    identifier: string;
    internal_id: number;
    uuid: string;
    name: string;
    node: string;
    sftp_details: ServerSftpDetails;
    description: string;
    limits: ServerLimits;
    invocation: string;
    docker_image: string;
    egg_features: unknown;
    feature_limits: ServerFeatureLimits;
    is_suspended: boolean;
    is_installing: boolean;
    is_transferring: boolean;
    relationships?: ServerRelationships;
}

export default interface Server {
    object: string;
    attributes: ServerAttributes;
}
