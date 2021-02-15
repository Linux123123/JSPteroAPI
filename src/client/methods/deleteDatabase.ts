import Request from '../ClientRequest';
import getAllDatabases from './getAllDatabases';

/**
 * @param {Number} userId The user ID to delete
 */
export default async function deleteDatabase(
    serverId: string,
    databaseName: string
): Promise<string> {
    const databases = await getAllDatabases(serverId);
    const database = databases.find(
        (db) => db.attributes.name === databaseName
    );
    if (!database) throw new Error('Database not found');
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'deleteDatabase',
        'DELETE',
        null,
        'delDB',
        `/api/client/servers/${serverId}/databases/${database.attributes.id}`,
        false
    );
}
