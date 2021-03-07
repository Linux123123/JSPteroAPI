import { Request } from '../ClientRequest';
import { Permissions } from '../interfaces/Permissions';
import { UserAttributes } from '../interfaces/User';

export class accountMethods {
    public constructor(private host: string, private key: string) {}
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
}
