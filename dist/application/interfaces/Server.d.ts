import Database from './Database';
import Egg from './Egg';
import Location from './Location';
import Nest from './Nest';
import Node from './Node';
import User from './User';
export interface ServerEnvironment {
    [key: string]: unknown;
    MAX_USERS?: number;
    MUMBLE_VERSION?: number;
    TS_VERSION?: string;
    FILE_TRANSFER?: number;
    ARK_PASSWORD?: string;
    ARK_ADMIN_PASSWORD?: string;
    SERVER_MAP?: string;
    SRCDS_APPID?: number | string | null;
    SESSION_NAME?: string;
    ENABLE_RCON?: boolean;
    RCON_PORT?: number;
    QUERY_PORT?: number;
    AUTO_UPDATE?: boolean;
    BATTLE_EYE?: boolean;
    SRCDS_MAP?: string;
    STEAM_ACC?: null | string;
    SRCDS_GAME?: string;
    WORKSHOP_ID?: null | number;
    GAMEMODE?: string;
    MAX_PLAYERS?: number;
    TICKRATE?: number;
    INSTALL_REPO?: null | string;
    USERNAME?: null | string;
    PASSWORD?: null | string;
    INSTALL_BRANCH?: null | string;
    USER_UPLOAD?: boolean;
    BOT_JS_FILE?: string;
    NODE_PACKAGES?: null | string;
    BUNGEE_VERSION?: string;
    SERVER_JARFILE?: string;
    MC_VERSION?: string;
    BUILD_TYPE?: string;
    FORGE_VERSION?: null | string;
    MINECRAFT_VERSION?: null | string;
    DL_PATH?: null | string;
    BUILD_NUMBER?: string;
    SPONGE_VERSION?: string;
    VANILLA_VERSION?: number;
    HOSTNAME?: string;
    OXIDE?: boolean;
    LEVEL?: string;
    DESCRIPTION?: string;
    SERVER_URL?: null | string;
    WORLD_SIZE?: number;
    WORLD_SEED?: null | string;
    SERVER_IMG?: null | string;
    RCON_PASS?: string;
    SAVEINTERVAL?: number;
    ADDITIONAL_ARGS?: null | string;
}
export interface ServerIncludesInput {
    allocations?: boolean;
    user?: boolean;
    subusers?: boolean;
    nest?: boolean;
    egg?: boolean;
    variables?: boolean;
    location?: boolean;
    node?: boolean;
    databases?: boolean;
}
export interface ServerLimits {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
    threads: null | string | number;
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
    environment: ServerEnvironment;
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
    alias: string;
    port: number;
    notes: null | string;
    assigned: boolean;
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
    id: number;
    egg_id: number;
    name: string;
    description: string;
    env_variable: string;
    default_value: string;
    user_viewable: boolean;
    user_editable: boolean;
    rules: string;
    created_at: string;
    updated_at: string;
    server_value: string;
}
export interface ServerSubUsers {
    object: string;
    data: ServerSubUser[];
}
export interface ServerSubUser {
    object: 'subuser';
    attributes: ServerSubUserAttributes;
}
export interface ServerSubUserAttributes {
    id: number;
    user_id: number;
    server_id: number;
    permissions: string[];
    created_at: string;
    updated_at: string;
}
export interface ServerDatabases {
    object: string;
    data: Database[];
}
export interface ServerRelationships {
    allocations?: ServerAllocations;
    user?: User;
    subusers?: ServerSubUsers;
    nest?: Nest;
    egg?: Egg;
    variables?: ServerVariables;
    location?: Location;
    node?: Node;
    databases?: ServerDatabases;
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
    relationships?: ServerRelationships;
}
export default interface Server {
    object: string;
    attributes: ServerAttributes;
}
