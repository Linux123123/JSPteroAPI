/** @module ApplicationServer */
import { Database } from './Database';
import { Egg } from './Egg';
import { Location } from './Location';
import { Nest } from './Nest';
import { Node } from './Node';
import { User } from './User';

export interface ServerEnvironment {
    [key: string]: string | undefined;
    MAX_USERS?: string;
    MUMBLE_VERSION?: string;
    TS_VERSION?: string;
    FILE_TRANSFER?: string;
    ARK_PASSWORD?: string;
    ARK_ADMIN_PASSWORD?: string;
    SERVER_MAP?: string;
    SRCDS_APPID?: string;
    SESSION_NAME?: string;
    ENABLE_RCON?: string;
    RCON_PORT?: string;
    QUERY_PORT?: string;
    AUTO_UPDATE?: string;
    BATTLE_EYE?: string;
    SRCDS_MAP?: string;
    STEAM_ACC?: string;
    SRCDS_GAME?: string;
    WORKSHOP_ID?: string;
    GAMEMODE?: string;
    MAX_PLAYERS?: string;
    TICKRATE?: string;
    INSTALL_REPO?: string;
    USERNAME?: string;
    PASSWORD?: string;
    INSTALL_BRANCH?: string;
    USER_UPLOAD?: string;
    BOT_JS_FILE?: string;
    NODE_PACKAGES?: string;
    BUNGEE_VERSION?: string;
    SERVER_JARFILE?: string;
    MC_VERSION?: string;
    BUILD_TYPE?: string;
    FORGE_VERSION?: string;
    MINECRAFT_VERSION?: string;
    DL_PATH?: string;
    BUILD_NUMBER?: string;
    SPONGE_VERSION?: string;
    VANILLA_VERSION?: string;
    HOSTNAME?: string;
    OXIDE?: string;
    LEVEL?: string;
    DESCRIPTION?: string;
    SERVER_URL?: string;
    WORLD_SIZE?: string;
    WORLD_SEED?: string;
    SERVER_IMG?: string;
    RCON_PASS?: string;
    SAVEINTERVAL?: string;
    ADDITIONAL_ARGS?: string;
}

export interface ServerFilterInput {
    filter: string;
    filterBy: 'uuidShort' | 'uuid' | 'name' | 'external_id' | 'image';
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

export interface Server {
    object: string;
    attributes: ServerAttributes;
}

export interface Servers {
    object: string;
    data: Server[];
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

export interface EditServerDetails {
    /** New server name */
    name?: string;
    /** ID of the new server owner */
    userId?: number;
    /** Set the new external ID */
    externalId?: string;
    /** Set new description */
    description?: string;
    /** Include information about server relationships */
    options?: ServerIncludesInput;
}

export interface EditServerBuild {
    /** The new primary allocation id */
    allocationId?: number;
    /** Array of new allocation ids to add */
    addAllocations?: number[];
    /** Array of allocation ids to remove from server */
    removeAllocations?: number[];
    /** Amount of cpu resources to give (1 core = 100) (0 unlimited) */
    cpu?: number;
    /** Amount of memory resources to give (1024 = 1GB) (0 unlimited) */
    memory?: number;
    /** Amount of disk space to give (1024 = 1GB) (0 unlimited) */
    disk?: number;
    /** Amount databases server can create */
    databases?: number;
    /** Amount allocations server can create */
    allocations?: number;
    /** Amount backups server can create */
    backups?: number;
    /** Amount swap resources to give (1024 = 1GB) (-1 unlimited) */
    swap?: number;
    /** ADVANCED IO performance of the host server (between 10 and 1000) */
    io?: number;
    /** ADVANCED Threads for the server to use */
    threads?: string;
    /** Include information about server relationships */
    options?: ServerIncludesInput;
}

export interface EditServerStartup {
    startup?: string;
    environment?: ServerEnvironment;
    egg?: number;
    image?: string;
    options?: ServerIncludesInput;
    skip_scripts?: boolean;
}
