/** @module ApplicationEgg*/
import { Nest } from './Nest';
import { Server } from './Server';

export interface EggConfig {
    files: unknown[];
    startup: Record<string, string>;
    stop: string;
    logs: unknown[];
    file_denylist: string[];
    extends: null | unknown;
}

export interface EggScript {
    privileged: boolean;
    install: string;
    entry: string;
    container: string;
    extends: null;
}

export interface EggVariableDataAttributes {
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
}

export interface EggVariableData {
    object: string;
    attributes: EggVariableDataAttributes;
}

export interface EggVariables {
    object: string;
    data: EggVariableData[];
}

export interface EggServers {
    object: string;
    data: Server[];
}

export interface EggRelationships {
    nest?: Nest;
    servers?: EggServers;
    variables?: EggVariables;
}

export interface EggAttributes {
    id: number;
    uuid: string;
    name: string;
    nest: number;
    author: string;
    description: string;
    docker_image: string;
    docker_images: string[];
    config: EggConfig;
    startup: string;
    script: EggScript;
    created_at: '2021-01-27T13:46:16+00:00';
    updated_at: '2021-01-27T13:46:16+00:00';
    relationships?: EggRelationships;
}

export interface Egg {
    object: string;
    attributes: EggAttributes;
}
