import { DatabaseAttributes } from '../interfaces/Database';
/**
 * @param {String} serverId ID of the server to create database to
 * @param {String} databaseName Database name
 * @param {(string|string[])} [connectionsAllowedFrom='%'] Connections allowed from
 */
export default function createDatabase(serverId: string, databaseName: string, connectionsAllowedFrom?: string | string[]): Promise<DatabaseAttributes>;
