export interface LocationAttributes {
    id: number;
    short: string;
    long: string;
    updated_at: string;
    created_at: string;
}
export default interface Location {
    object: string;
    attributes: LocationAttributes;
}
