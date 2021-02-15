import { UserAttributes } from '../interfaces/User';
/**
 * @param {String} username Users username
 * @param {String} email Users email
 * @param {String} firstName Users first name
 * @param {String} lastName Users last name
 * @param {Boolean} isAdmin Is the user admin? (true/false)
 * @param {String} language Language, Normally en/fr (2 letter languages)
 * @param {String} [password] Users password
 */
export default function createUser(username: string, email: string, firstName: string, lastName: string, isAdmin: boolean, language?: string, password?: string): Promise<UserAttributes>;
//# sourceMappingURL=createUser.d.ts.map