import Request from '../ApplicationRequest';

/**
 * @param {Number} userId The user ID to delete
 */
export default async function deleteUser(userId: number): Promise<string> {
    const Req = new Request(process.env.AppHost!, process.env.AppKey!);
    return Req.request(
        'deleteUser',
        'DELETE',
        null,
        'delUser',
        `/api/application/users/${userId}`,
        false
    );
}
