import Server from '../interfaces/Server';
/**
 * @yields A Array of servers a application key has access to
 */
export default function getAllServers(): Promise<Server[]>;
