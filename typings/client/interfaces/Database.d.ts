export interface DatabaseAttributesHost {
    address: string;
    port: number;
}
export interface DatabaseAttributes {
    id: string;
    host: DatabaseAttributesHost;
    name: string;
    username: string;
    connections_from: string;
    max_connections: number;
}
export interface DatabaseAttributesRelationship extends DatabaseAttributes {
    relationships: DatabaseRelationships;
}
export interface DatabaseRelationships {
    password: DatabasePassword;
}
export interface DatabasePassword {
    object: string;
    attributes: DatabasePasswordAttributes;
}
export interface DatabasePasswordAttributes {
    password: string;
}
export default interface Database {
    object: string;
    attributes: DatabaseAttributes;
}
