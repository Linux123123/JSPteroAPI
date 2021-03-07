export interface UserAttributes {
    id: number;
    admin: boolean;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    language: string;
}

export interface User {
    object: 'user';
    attributes: UserAttributes;
}
