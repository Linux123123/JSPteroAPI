import User, { UserAttributes, UserIncludeInput } from '../interfaces/User';
export default class userMethods {
    private host;
    private key;
    constructor(host: string, key: string);
    /**
     * @param options - Include information about relationships
     * @returns Array of users
     * @example
     * ```ts
     * const res = await app.getAllUsers() // res = User[]
     * ```
     * @example
     * ```ts
     * app.getAllUsers().then((res) => console.log(res)) // res = User[]
     * ```
     */
    getAllUsers: (options?: UserIncludeInput | undefined) => Promise<User[]>;
    /**
     * @param userId - The user id to get information about
     * @param options - Include information about relationships
     * @returns User information
     * @example
     * ```ts
     * const res = await app.getUserInfo(1) // res = UserAttributes
     * ```
     * @example
     * ```ts
     * app.getUserInfo(1).then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    getUserInfo: (userId: number, options?: UserIncludeInput | undefined) => Promise<UserAttributes>;
    /**
     * @param userId - The external user id to get information about
     * @param options - Include information about relationships
     * @returns User information
     * @example
     * ```ts
     * const res = await app.getUserInfoByExtId(1) // res = UserAttributes
     * ```
     * @example
     * ```ts
     * app.getUserInfoByExtId(1).then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    getUserInfoByExtId: (userId: string, options?: UserIncludeInput | undefined) => Promise<UserAttributes>;
    /**
     * @param username - The username of the user
     * @param firstName - The first name of the user
     * @param lastName - The last name of the user
     * @param email - The email address of the user
     * @param password - The password of the user
     * @param isAdmin - Is the user admin (default false)
     * @param language - The language of the user (default en)
     * @param externalId - The external id of user
     * @param options - Include information about relationships
     * @returns User information
     * @example
     * ```ts
     * const res = await app.createUser('linux123123', 'Linus', 'ADMIN', 'api@gmail.com') // res = UserAttributes
     * ```
     * @example
     * ```ts
     * app.createUser('linux123123', 'Linus', 'ADMIN', 'api@gmail.com').then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    createUser: (username: string, firstName: string, lastName: string, email: string, password?: string, isAdmin?: boolean, language?: string, externalId?: string | undefined) => Promise<UserAttributes>;
    /**
     * @param userId - The user id of the user to edit
     * @param username - The new username of the user
     * @param firstName - The new first name of the user
     * @param lastName - The new last name of the user
     * @param email - The new email address of the user
     * @param password - The new password of the user
     * @param isAdmin - Is the user admin
     * @param language - The new language of the user
     * @param externalId - The new external id of user
     * @param options - Include information about relationships
     * @returns User information
     * @example
     * ```ts
     * const res = await app.editUser(1, 'linux123123', undefined, 'ADMIN_LAST) // res = UserAttributes
     * ```
     * @example
     * ```ts
     * app.editUser(1, undefined, 'Linux').then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    editUser: (userId: number, username?: string | undefined, firstName?: string | undefined, lastName?: string | undefined, email?: string | undefined, password?: string | undefined, isAdmin?: boolean | undefined, language?: string | undefined, externalId?: string | undefined, options?: UserIncludeInput | undefined) => Promise<UserAttributes>;
    /**
     * @param userId - The user id of the user to delete
     * @returns If successful returns Successfully deleted!
     * @example
     * ```ts
     * const res = await app.deleteUser(1) // res = Successfully deleted!
     * ```
     * @example
     * ```ts
     * app.deleteUser(1).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    deleteUser: (userId: number) => Promise<string>;
}
