/** @module ApplicationLocation */

import { Node } from './Node';
import { Server } from './Server';

export interface LocationIncludeInput {
    nodes?: boolean;
    servers?: boolean;
}

export interface LocationFilterInput {
    filter: string;
    filterBy: 'short' | 'long';
}

export interface LocationNodes {
    object: string;
    data: Node[];
}

export interface LocationServers {
    object: string;
    data: Server[];
}

export interface LocationRelationships {
    nodes?: LocationNodes;
    servers?: LocationServers;
}

export interface LocationAttributes {
    id: number;
    short: string;
    long: string;
    updated_at: string;
    created_at: string;
    relationships?: LocationRelationships;
}

export interface Location {
    object: string;
    attributes: LocationAttributes;
}

export interface Locations {
    object: string;
    data: Location[];
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

export interface EditLocationOptions {
    /** The short name */
    shortName?: string;
    /** The description */
    description?: string;
    /** Include information about locations relationships */
    options?: LocationIncludeInput;
}
