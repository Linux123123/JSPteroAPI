/** @module ApplicationUser */
import { Server } from './Server';

export interface UserIncludeInput {
    servers: boolean;
}

export interface UserServers {
    object: string;
    data: Server[];
}

export interface UserRelationships {
    servers: UserServers;
}

export interface UserAttributes {
    'id': number;
    'external_id': string | null;
    'uuid': string;
    'username': string;
    'email': string;
    'first_name': string;
    'last_name': string;
    'language': string;
    'root_admin': boolean;
    '2fa': boolean;
    'created_at': string;
    'updated_at': string;
    'relationships'?: UserRelationships;
}

export interface User {
    object: string;
    attributes: UserAttributes;
}
