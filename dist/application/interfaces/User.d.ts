export interface UserAttributes {
    id: number;
    external_id: null;
    uuid: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    language: string;
    root_admin: boolean;
    '2fa': boolean;
    created_at: string;
    updated_at: string;
}
export default interface User {
    object: string;
    attributes: UserAttributes;
}
//# sourceMappingURL=User.d.ts.map