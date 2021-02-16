import { ServerAttributes } from '../interfaces/Server';
/**
 * @param {String} name Name of server to create
 * @param {Integer} ownerId User ID of who should own this server
 * @param {String} description Description of server
 * @param {Integer} eggId Egg ID to use when installing the server
 * @param {Integer} nestID ID of the nest to use when making a server
 * @param {Integer} ram The amount of RAM the server has
 * @param {Integer} swap The amount of Swap the server has
 * @param {Integer} disk The amount of Storage the server has
 * @param {Integer} cpu The amount of CPU Power the server can use (100 = 1 core);
 * @param {Object} environment Servers environment variables. REQUIRED!
 * @param {Integer} amountOfDatabases The max amount of databases a server can use
 * @param {Integer} amountOfAllocations The max amount of allocation(s) a server can use
 * @param {Integer} amountOfBackups The max amount of backups a server can use
 * @param {String} [startupCmd] The command to use when starting this server (AKA JVM Arguments)
 * @param {String} [dockerImage] The image to use from Docker
 * @param {Integer} [io=500] Set this to 500.
 * @yields {ServerAttributes} (refer to docs for schema);
 */
export default function createServer(name: string, ownerId: number, description: string, nestId: number, eggId: number, ram: number, swap: number, disk: number, cpu: number, environment: Object, amountOfDatabases: number, amountOfAllocations: number, amountOfBackups: number, startupCmd?: string, dockerImage?: string, io?: number): Promise<ServerAttributes>;
