import { UserAttributes } from '../interfaces/User';
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
export default function editUser(userId: number, username?: string, password?: string, email?: string, firstName?: string, lastName?: string, isAdmin?: boolean, language?: string): Promise<UserAttributes>;
