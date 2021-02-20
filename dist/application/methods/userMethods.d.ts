import User, { UserAttributes, UserIncludeInput } from '../interfaces/User';
export default class userMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<User[]>} Array of users
     * @example
     * ```js
     * const res = await app.getAllUsers() // res = User[]
     * ```
     * @example
     * ```js
     * app.getAllUsers().then((res) => console.log(res)) // res = User[]
     * ```
     */
    getAllUsers: (options?: UserIncludeInput | undefined) => Promise<User[]>;
    /**
     * @param {number} userId The user id to get information about
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     * @example
     * ```js
     * const res = await app.getUserInfo(1) // res = UserAttributes
     * ```
     * @example
     * ```js
     * app.getUserInfo(1).then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    getUserInfo: (userId: number, options?: UserIncludeInput | undefined) => Promise<UserAttributes>;
    /**
     * @param {string} userId The external user id to get information about
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     * @example
     * ```js
     * const res = await app.getUserInfoByExtId(1) // res = UserAttributes
     * ```
     * @example
     * ```js
     * app.getUserInfoByExtId(1).then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    getUserInfoByExtId: (userId: string, options?: UserIncludeInput | undefined) => Promise<UserAttributes>;
    /**
     * @param {string} username The username of the user
     * @param {string} firstName The first name of the user
     * @param {string} lastName The last name of the user
     * @param {string} email The email address of the user
     * @param {string} [password] The password of the user
     * @param {boolean} [isAdmin=false] Is the user admin (default false)
     * @param {string} [language="en"] The language of the user (default en)
     * @param {string} [externalId] The external id of user
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     * @example
     * ```js
     * const res = await app.createUser('linux123123', 'Linus', 'ADMIN', 'api@gmail.com') // res = UserAttributes
     * ```
     * @example
     * ```js
     * app.createUser('linux123123', 'Linus', 'ADMIN', 'api@gmail.com').then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    createUser: (username: string, firstName: string, lastName: string, email: string, password?: string, isAdmin?: boolean, language?: string, externalId?: string | undefined) => Promise<UserAttributes>;
    /**
     * @param {number} userId The user id of the user to edit
     * @param {string} [username] The new username of the user
     * @param {string} [firstName] The new first name of the user
     * @param {string} [lastName] The new last name of the user
     * @param {string} pemail] The new email address of the user
     * @param {string} [password] The new password of the user
     * @param {boolean} [isAdmin=false] Is the user admin
     * @param {string} [language="en"] The new language of the user
     * @param {string} [externalId] The new external id of user
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     * @example
     * ```js
     * const res = await app.editUser(1, 'linux123123', undefined, 'ADMIN_LAST) // res = UserAttributes
     * ```
     * @example
     * ```js
     * app.editUser(1, undefined, 'Linux').then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    editUser: (userId: number, username?: string | undefined, firstName?: string | undefined, lastName?: string | undefined, email?: string | undefined, password?: string | undefined, isAdmin?: boolean | undefined, language?: string | undefined, externalId?: string | undefined, options?: UserIncludeInput | undefined) => Promise<UserAttributes>;
    /**
     * @param {number} userId The user id of the user to delete
     * @returns {Promise<string>} If successful returns Successfully deleted!
     * @example
     * ```js
     * const res = await app.deleteUser(1) // res = Successfully deleted!
     * ```
     * @example
     * ```js
     * app.deleteUser(1).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    deleteUser: (userId: number) => Promise<string>;
}
