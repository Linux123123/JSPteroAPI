export interface ServerLimits {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
    threads: null | number;
}
export interface ServerFeatureLimits {
    databases: number;
    allocations: number;
    backups: number;
}
export interface ServerContainer {
    startup_command: string;
    image: string;
    installed: boolean;
    environment: any;
}
export interface ServerAttributes {
    id: number;
    external_id: null;
    uuid: string;
    identifier: string;
    name: string;
    description: string;
    suspended: boolean;
    limits: ServerLimits;
    feature_limits: ServerFeatureLimits;
    user: number;
    node: number;
    allocation: number;
    nest: number;
    egg: number;
    container: ServerContainer;
    updated_at: string;
    created_at: string;
}
export default interface Server {
    object: string;
    attributes: ServerAttributes;
}
//# sourceMappingURL=Server.d.ts.map