import { UserAttributes } from '../interfaces/User';
import Request from '../ApplicationRequest';

/**
 * @param {String} username Users username
 * @param {String} email Users email
 * @param {String} firstName Users first name
 * @param {String} lastName Users last name
 * @param {Boolean} isAdmin Is the user admin? (true/false)
 * @param {String} language Language, Normally en/fr (2 letter languages)
 * @param {String} [password] Users password
 */
export default async function createUser(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    isAdmin: boolean,
    language: string = 'en',
    password?: string
): Promise<UserAttributes> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    const data: any = createData(
        username,
        email,
        firstName,
        lastName,
        isAdmin,
        language
    );
    if (password) data.password = password;
    return Req.request(
        'createUser',
        'POST',
        data,
        'attributes',
        '/api/application/users',
        true
    );
}

function createData(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    isAdmin: boolean,
    language: string
) {
    return {
        email: email,
        username: username,
        first_name: firstName,
        last_name: lastName,
        root_admin: isAdmin,
        language: language,
    };
}
