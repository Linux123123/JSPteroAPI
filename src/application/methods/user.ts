import { Application } from '../index';
import { makeOptions, MakeOpts, paginate } from '../../modules/Functions';
import {
  EditUserOptions,
  User,
  UserAttributes,
  UserFilterInput,
  UserIncludeInput,
  Users
} from '../interfaces/User';

export class userMethods {
  constructor(private readonly application: Application) {}
  /**
   * @internal
   */
  private getUsers = async (options: MakeOpts): Promise<Users> => {
    return this.application.request(
      'GET',
      null,
      '',
      `/api/application/users${makeOptions(options)}`
    );
  };
  /**
   * @param options - Include information about relationships
   * @param filter - Filter Users by specific fields and values
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
  public getAllUsers = async (
    options?: UserIncludeInput,
    filter?: UserFilterInput
  ): Promise<User[]> => {
    return await paginate<User>(this.getUsers.bind(this), {
      includes: { ...options },
      filter: filter
    });
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
  public getUserInfo = async (
    userId: number,
    options?: UserIncludeInput
  ): Promise<UserAttributes> => {
    return this.application.request(
      'GET',
      null,
      'attributes',
      `/api/application/users/${userId}${makeOptions({
        includes: { ...options }
      })}`
    );
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
  public getUserInfoByExtId = async (
    userId: string,
    options?: UserIncludeInput
  ): Promise<UserAttributes> => {
    return this.application.request(
      'GET',
      null,
      'attributes',
      `/api/application/users/external/${userId}${makeOptions({
        includes: { ...options }
      })}`
    );
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
  public createUser = async (
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password = '',
    isAdmin = false,
    language = 'en',
    externalId?: string
  ): Promise<UserAttributes> => {
    return this.application.request(
      'POST',
      {
        email: email,
        username: username,
        first_name: firstName,
        last_name: lastName,
        language: language,
        root_admin: isAdmin,
        password: password,
        external_id: externalId ? externalId : ''
      },
      'attributes',
      `/api/application/users`
    );
  };
  /**
   * @param userId - The user id of the user to edit
   * @param options - Options to edit user
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
  public editUser = async (
    userId: number,
    options: EditUserOptions
  ): Promise<UserAttributes> => {
    const user = await this.getUserInfo(userId);
    return this.application.request(
      'PATCH',
      {
        email: options.email ?? user.email,
        username: options.username ?? user.username,
        first_name: options.firstName ?? user.first_name,
        last_name: options.lastName ?? user.last_name,
        language: options.language ?? user.language,
        root_admin: options.isAdmin ?? user.root_admin,
        password: options.password ?? '',
        external_id: options.externalId ?? user.external_id
      },
      'attributes',
      `/api/application/users/${userId}${makeOptions({
        includes: { ...options.options }
      })}`
    );
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
  public deleteUser = async (userId: number): Promise<string> => {
    return this.application.request(
      'DELETE',
      null,
      'Successfully deleted!',
      `/api/application/users/${userId}`
    );
  };
}
