import { UserAttributes } from '../interfaces/User';
import Request from '../ApplicationRequest';
import getUserInfo from './getUserInfo';

/**
 * @param {Number} userId External UserId
 * @param {String} [username] New username or undefined to skip
 * @param {String} [password] New password or undefined to skip
 * @param {String} [email] New email or undefined to skip
 * @param {String} [firstName] New first name or undefined to skip
 * @param {String} [lastName] New last name or undefined to skip
 * @param {Boolean} [isAdmin] New admin boolean or undefined to skip
 * @param {String} [language] New language or undefined to skip
 */
export default async function editUser(
    userId: number,
    username?: string,
    password?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    isAdmin?: boolean,
    language?: string
): Promise<UserAttributes> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    const user = await getUserInfo(userId);
    if (!username) username = user.username;
    if (!password) password = undefined;
    if (!email) email = user.email;
    if (!firstName) firstName = user.first_name;
    if (!lastName) lastName = user.last_name;
    if (!isAdmin) isAdmin = user.root_admin;
    if (!language) language = user.language;
    const data = createData(
        username,
        password,
        email,
        firstName,
        lastName,
        isAdmin,
        language
    );
    return Req.request(
        'editUser',
        'PATCH',
        data,
        'attributes',
        `/api/application/users/${userId}`,
        true
    );
}

function createData(
    username: string,
    password: string | undefined,
    email: string,
    firstName: string,
    lastName: string,
    isAdmin: boolean,
    language: string
) {
    let data: any = {
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        root_admin: isAdmin,
        language: language,
    };
    if (password) data.password = password;
    return data;
}
