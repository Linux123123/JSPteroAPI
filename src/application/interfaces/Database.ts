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
}

export default interface Database {
    object: string;
    attributes: DatabaseAttributes;
}
