export interface DatabaseIncludeInput {
    password?: boolean;
    host?: boolean;
}
export interface DatabasePasswordAttributes {
    password: string;
}
export interface DatabasePassword {
    object: string;
    attributes: DatabasePasswordAttributes;
}
export interface DatabaseHostAttributes {
    id: number;
    name: string;
    host: string;
    port: number;
    username: string;
    node: number;
    created_at: string;
    updated_at: string;
}
export interface DatabaseHost {
    object: string;
    attributes: DatabaseHostAttributes;
}
export interface DatabaseRelationships {
    password?: DatabasePassword;
    host?: DatabaseHost;
}
export interface DatabaseAttributes {
    id: number;
    server: number;
    host: number;
    database: string;
    username: string;
    remote: string;
    max_connections: null | number;
    created_at: string;
    updated_at: string;
    relationships?: DatabaseRelationships;
}
export default interface Database {
    object: string;
    attributes: DatabaseAttributes;
}
