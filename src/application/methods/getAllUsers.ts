import User from '../interfaces/User';
import Request from '../ApplicationRequest';

export default async function getAllUsers(): Promise<User[]> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'getAllUsers',
        'GET',
        null,
        'data',
        '/api/application/users',
        false
    );
}
