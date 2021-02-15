import { UserAttributes } from '../interfaces/User';
import Request from '../ApplicationRequest';

export default async function getUserInfo(
    UserID: number
): Promise<UserAttributes> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'getUserInfo',
        'GET',
        null,
        'attributes',
        `/api/application/users/${UserID}`,
        false
    );
}
