/** @module ApplicationNest */
import { Egg } from './Egg';
import { Server } from './Server';
export interface NestIncludeInput {
    eggs?: boolean;
    servers?: boolean;
}
export interface EggIncludeInput {
    nest?: boolean;
    servers?: boolean;
    variables?: boolean;
}
export interface NestServers {
    object: string;
    data: Server[];
}
export interface NestEggs {
    object: string;
    data: Egg[];
}
export interface NestRelationships {
    eggs?: NestEggs;
    servers?: NestServers;
}
export interface NestAttributes {
    id: number;
    uuid: string;
    author: string;
    name: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    relationships?: NestRelationships;
}
export interface Nest {
    object: string;
    attributes: NestAttributes;
}
