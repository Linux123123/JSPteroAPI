import { DatabaseAttributesRelationship } from '../interfaces/Database';
/**
 * @param {String} serverId ID of the server to create database to
 * @param {String} databaseName Database name (e. g. s5_hello)
 */
export default function rotateDatabasePass(serverId: string, databaseName: string): Promise<DatabaseAttributesRelationship>;
