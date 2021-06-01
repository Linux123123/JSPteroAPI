import { Request } from '../ClientRequest';
import { ApiKey } from '../interfaces/ApiKey';
import { Permissions } from '../interfaces/Permissions';
import { UserAttributes } from '../interfaces/User';

export class accountMethods {
    public constructor(
        private readonly host: string,
        private readonly key: string,
    ) {}
    /**
     * @returns Permission data
     * @remarks Just returns all available permissions. Not that useful!
     * @example
     * ```ts
     * const res = await client.getPermissions() // res = Permissions
     * ```
     * @example
     * ```ts
     * client.getPermissions().then((res) => console.log(res)) // res = Permissions
     * ```
     */
    public async getAllPermissions(): Promise<Permissions> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/client/permissions`,
        );
    }
    /**
     * @returns Account information
     * @example
     * ```ts
     * const res = await client.getAccountInfo() // res = UserAttributes
     * ```
     * @example
     * ```ts
     * client.getAccountInfo().then((res) => console.log(res)) // res = UserAttributes
     * ```
     */
    public async getAccountInfo(): Promise<UserAttributes> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/client/account`,
        );
    }
    /**
     * @returns TOTP QR code image url (otpauth)
     * ```ts
     * const res = await client.getAccountInfo() // res = string (otpauth)
     * ```
     * @example
     * ```ts
     * client.getAccountInfo().then((res) => console.log(res)) // res = string (otpauth)
     * ```
     */
    public async getAccount2FADetails(): Promise<string> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data image_url_data',
            `/api/client/account/two-factor`,
        );
    }
    /**
     * @param code - The code from authenticator
     * @returns Tokens
     * ```ts
     * const res = await client.enable2FA('505134') // res = string[] (tokens)
     * ```
     * @example
     * ```ts
     * client.enable2FA('505134').then((res) => console.log(res)) // res = string[] (tokens)
     * ```
     */
    public async enable2FA(code: string): Promise<string[]> {
        return new Request(this.host, this.key).request(
            'POST',
            {
                code: code,
            },
            'attributes tokens',
            `/api/client/account/two-factor`,
        );
    }
    /**
     * @param password - The code from authenticator
     * @returns If succesful returns Successfully disable 2FA!
     * ```ts
     * const res = await client.disable2FA('securepassword') // res = Successfully disable 2FA!
     * ```
     * @example
     * ```ts
     * client.disable2FA('securepassword').then((res) => console.log(res)) // res = Successfully disable 2FA!
     * ```
     */
    public async disable2FA(password: string): Promise<string> {
        return new Request(this.host, this.key).request(
            'DELETE',
            {
                password: password,
            },
            'Successfully disable 2FA!',
            `/api/client/account/two-factor`,
        );
    }
    /**
     * @param email - The new email address
     * @param password - The password of the user
     * @returns If succesful returns Successfully updated email!
     * ```ts
     * const res = await client.updateEmail('jspteroapi@linux123123.cf', 'verySecurePass') // res = Successfully updated email!
     * ```
     * @example
     * ```ts
     * client.updateEmail('jspteroapi@linux123123.cf', 'verySecurePass').then((res) => console.log(res)) // res = Successfully updated email!
     * ```
     */
    public async updateEmail(email: string, password: string): Promise<string> {
        return new Request(this.host, this.key).request(
            'PUT',
            {
                email: email,
                password: password,
            },
            'Successfully updated email!',
            `/api/client/account/email`,
        );
    }
    /**
     * @param currentPassword - The currect passowrd
     * @param password - The new password
     * @returns If succesful returns Successfully updated password!
     * ```ts
     * const res = await client.updatePassword('verySecurePass', 'moreSecurePass') // res = Successfully updated password!
     * ```
     * @example
     * ```ts
     * client.updatePassword('verySecurePass', 'moreSecurePass').then((res) => console.log(res)) // res = Successfully updated password!
     * ```
     */
    public async updatePassword(
        currentPassword: string,
        password: string,
    ): Promise<string> {
        return new Request(this.host, this.key).request(
            'PUT',
            {
                current_password: currentPassword,
                password: password,
                password_confirmation: password,
            },
            'Successfully updated password!',
            `/api/client/account/password`,
        );
    }
    /**
     * @returns Api key array
     * @example
     * ```ts
     * const res = await client.getAllApiKeys() // res = ApiKey[]
     * ```
     * @example
     * ```ts
     * client.getAllApiKeys().then((res) => console.log(res)) // res = ApiKey[]
     * ```
     */
    public async getAllApiKeys(): Promise<ApiKey[]> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/client/account/api-keys`,
        );
    }
    /**
     * @param description - Api key description
     * @param allowedIps - Array of allowed IP addresses (default empty [])
     * @returns The new api key information + meta (token)
     * ```ts
     * const res = await client.createApiKey('TESTING', []) // res = ApiKey + meta (token)
     * ```
     * @example
     * ```ts
     * client.createApiKey('TESTING', []).then((res) => console.log(res)) // res = ApiKey + meta (token)
     * ```
     */
    public async createApiKey(
        description: string,
        allowedIps: string[] = [],
    ): Promise<ApiKey> {
        return new Request(this.host, this.key).request(
            'POST',
            {
                description: description,
                allowed_ips: allowedIps,
            },
            '',
            `/api/client/account/api-keys`,
        );
    }
    /**
     * @param apiKeyIden - The api keys identifier code
     * @returns If succesful returns Successfully deleted api key!
     * ```ts
     * const res = await client.deleteApiKey('NWKMYMT2Mrav0Iq2') // res = Successfully deleted api key!
     * ```
     * @example
     * ```ts
     * client.deleteApiKey('NWKMYMT2Mrav0Iq2').then((res) => console.log(res)) // res = Successfully deleted api key!
     * ```
     */
    public async deleteApiKey(apiKeyIden: string): Promise<string> {
        return new Request(this.host, this.key).request(
            'DELETE',
            null,
            'Successfully deleted api key!',
            `/api/client/account/api-keys/${apiKeyIden}`,
        );
    }
}
