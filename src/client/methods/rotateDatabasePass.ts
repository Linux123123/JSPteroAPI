import Request from '../ClientRequest';
import { DatabaseAttributesRelationship } from '../interfaces/Database';
import getAllDatabases from './getAllDatabases';

/**
 * @param {String} serverId ID of the server to create database to
 * @param {String} databaseName Database name (e. g. s5_hello)
 */
export default async function rotateDatabasePass(
    serverId: string,
    databaseName: string
): Promise<DatabaseAttributesRelationship> {
    const databases = await getAllDatabases(serverId);
    const database = databases.find(
        (db) => db.attributes.name === databaseName
    );
    if (!database) throw new Error('Database not found');
    const Req = new Request(process.env.ClientHost!, process.env.ClientKey!);
    return Req.request(
        'rotateDatabasePass',
        'POST',
        null,
        'attributes',
        `/api/client/servers/${serverId}/databases/${database.attributes.id}/rotate-password`,
        false
    );
}
