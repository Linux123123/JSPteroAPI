"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMethods = void 0;
const Functions_1 = require("../../modules/Functions");
const ApplicationRequest_1 = require("../ApplicationRequest");
class userMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
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
        this.getAllUsers = async (options) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('GET', null, 'data', `/api/application/users${Functions_1.makeIncludes(options)}`);
        };
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
        this.getUserInfo = async (userId, options) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('GET', null, 'attributes', `/api/application/users/${userId}${Functions_1.makeIncludes(options)}`);
        };
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
        this.getUserInfoByExtId = async (userId, options) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('GET', null, 'attributes', `/api/application/users/external/${userId}${Functions_1.makeIncludes(options)}`);
        };
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
        this.createUser = async (username, firstName, lastName, email, password = '', isAdmin = false, language = 'en', externalId) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('POST', {
                email: email,
                username: username,
                first_name: firstName,
                last_name: lastName,
                language: language,
                root_admin: isAdmin,
                password: password,
                external_id: externalId ? externalId : '',
            }, 'attributes', `/api/application/users`);
        };
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
        this.editUser = async (userId, username, firstName, lastName, email, password, isAdmin, language, externalId, options) => {
            const user = await this.getUserInfo(userId);
            return new ApplicationRequest_1.Request(this.host, this.key).request('PATCH', {
                email: email ? email : user.email,
                username: username ? username : user.username,
                first_name: firstName ? firstName : user.first_name,
                last_name: lastName ? lastName : user.last_name,
                language: language ? language : user.language,
                root_admin: isAdmin ? isAdmin : user.root_admin,
                password: password ? password : '',
                external_id: externalId ? externalId : user.external_id,
            }, 'attributes', `/api/application/users/${userId}${Functions_1.makeIncludes(options)}`);
        };
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
        this.deleteUser = async (userId) => {
            return new ApplicationRequest_1.Request(this.host, this.key).request('DELETE', null, 'Successfully deleted!', `/api/application/users/${userId}`);
        };
    }
}
exports.userMethods = userMethods;
