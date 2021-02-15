import { DatabaseAttributes } from '../interfaces/Database';
/**
 * @param {String} name Name of the Database
 * @param {Integer} hostDBID ID of the Database Host
 * @param {Integer} internalId InternalID of the Server to create the Database
 * @param {String} allowedIp IP allowed to connect, leave "%" if you dont want to restrict
 */
export default function createDatabase(name: string, hostDBID: number, internalId: number, allowedIp?: string): Promise<DatabaseAttributes>;
//# sourceMappingURL=createDatabase.d.ts.map