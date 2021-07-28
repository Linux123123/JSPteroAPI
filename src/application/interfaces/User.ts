/** @module ApplicationUser */
import { Server } from './Server';

export interface UserIncludeInput {
    servers: boolean;
}

export interface UserFilterInput {
    filter: string;
    filterBy: 'email' | 'uuid' | 'username' | 'external_id';
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

export interface Users {
    object: string;
    data: User[];
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

export interface EditUserOptions {
    /** The new username of the user */
    username?: string;
    /** The new first name of the user */
    firstName?: string;
    /** The new last name of the user */
    lastName?: string;
    /** The new email address of the user */
    email?: string;
    /** The new password of the user */
    password?: string;
    /** Is the user admin */
    isAdmin?: boolean;
    /** The new language of the user */
    language?: string;
    /** The new external id of user */
    externalId?: string;
    /** Include information about relationships */
    options?: UserIncludeInput;
}
