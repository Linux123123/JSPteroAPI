import makeIncludes from '../../modules/Functions';
import Request from '../ApplicationRequest';
import User, { UserAttributes, UserIncludeInput } from '../interfaces/User';
export default class userMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @example
     *   const res = await app.getAllUsers(); // res = User[]
     *
     * @example
     *   app.getAllUsers().then((res) => console.log(res)); // res = User[]
     *
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<User[]>} Array of users
     */
    public getAllUsers = async (
        options?: UserIncludeInput,
    ): Promise<User[]> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/application/users${makeIncludes(options)}`,
        );
    };
    /**
     * @example
     *   const res = await app.getUserInfo(1); // res = UserAttributes
     *
     * @example
     *   app.getUserInfo(1).then((res) => console.log(res)); // res = UserAttributes
     *
     * @param {Number} userId The user id to get information about
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     */
    public getUserInfo = async (
        userId: number,
        options?: UserIncludeInput,
    ): Promise<UserAttributes> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/application/users/${userId}${makeIncludes(options)}`,
        );
    };
    /**
     * @example
     *   const res = await app.getUserInfoByExtId(1); // res = UserAttributes
     *
     * @example
     *   app.getUserInfoByExtId(1).then((res) => console.log(res)); // res = UserAttributes
     *
     * @param {String} userId The external user id to get information about
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     */
    public getUserInfoByExtId = async (
        userId: string,
        options?: UserIncludeInput,
    ): Promise<UserAttributes> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/application/users/external/${userId}${makeIncludes(options)}`,
        );
    };
    /**
     * @example
     *   const res = await app.createUser(
     *       'linux123123',
     *       'Linus',
     *       'ADMIN',
     *       'api@gmail.com',
     *   ); // res = UserAttributes
     *
     * @example
     *   app.createUser(
     *       'linux123123',
     *       'Linus',
     *       'ADMIN',
     *       'api@gmail.com',
     *   ).then((res) => console.log(res)); // res = UserAttributes
     *
     * @param {String} username The username of the user
     * @param {String} firstName The first name of the user
     * @param {String} lastName The last name of the user
     * @param {String} email The email address of the user
     * @param {String} [password] The password of the user
     * @param {Boolean} [isAdmin=false] Is the user admin (default false).
     *   Default is `false`
     * @param {String} [language="en"] The language of the user (default en).
     *   Default is `"en"`
     * @param {String} [externalId] The external id of user
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     */
    public createUser = async (
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        password = '',
        isAdmin = false,
        language = 'en',
        externalId?: string,
    ): Promise<UserAttributes> => {
        return new Request(this.host, this.key).request(
            'POST',
            {
                email: email,
                username: username,
                first_name: firstName,
                last_name: lastName,
                language: language,
                root_admin: isAdmin,
                password: password,
                external_id: externalId ? externalId : '',
            },
            'attributes',
            `/api/application/users`,
        );
    };
    /**
     * @example
     *   const res = await app.editUser(1, 'linux123123', undefined, 'ADMIN_LAST) // res = UserAttributes
     *
     * @example
     *   app.editUser(1, undefined, 'Linux').then((res) => console.log(res)); // res = UserAttributes
     *
     * @param {Number} userId The user id of the user to edit
     * @param {String} [username] The new username of the user
     * @param {String} [firstName] The new first name of the user
     * @param {String} [lastName] The new last name of the user
     * @param {String}
     * @param {String} [password] The new password of the user
     * @param {Boolean} [isAdmin=false] Is the user admin. Default is `false`
     * @param {String} [language="en"] The new language of the user. Default is `"en"`
     * @param {String} [externalId] The new external id of user
     * @param {UserIncludeInput} [options] Include information about relationships
     * @returns {Promise<UserAttributes} User information
     */
    public editUser = async (
        userId: number,
        username?: string,
        firstName?: string,
        lastName?: string,
        email?: string,
        password?: string,
        isAdmin?: boolean,
        language?: string,
        externalId?: string,
        options?: UserIncludeInput,
    ): Promise<UserAttributes> => {
        const user = await this.getUserInfo(userId);
        return new Request(this.host, this.key).request(
            'PATCH',
            {
                email: email ? email : user.email,
                username: username ? username : user.username,
                first_name: firstName ? firstName : user.first_name,
                last_name: lastName ? lastName : user.last_name,
                language: language ? language : user.language,
                root_admin: isAdmin ? isAdmin : user.root_admin,
                password: password ? password : '',
                external_id: externalId ? externalId : user.external_id,
            },
            'attributes',
            `/api/application/users/${userId}${makeIncludes(options)}`,
        );
    };
    /**
     * @example
     *   const res = await app.deleteUser(1); // res = Successfully deleted!
     *
     * @example
     *   app.deleteUser(1).then((res) => console.log(res)); // res = Successfully deleted!
     *
     * @param {Number} userId The user id of the user to delete
     * @returns {Promise<string>} If successful returns Successfully deleted!
     */
    public deleteUser = async (userId: number): Promise<string> => {
        return new Request(this.host, this.key).request(
            'DELETE',
            null,
            'Successfully deleted!',
            `/api/application/users/${userId}`,
        );
    };
}
