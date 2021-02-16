import { NodeAttributes } from '../interfaces/Node';
/**
 * @param {String} name The name of the node
 * @param {String} description A description for the node
 * @param {Number} locationId Location ID to use
 * @param {Boolean} isPublic Is this node public? (true/false)
 * @param {String} fqdn Fully Qualified Domain Name (If you're using an IP: Scheme needs to be HTTP)
 * @param {String} scheme http/https
 * @param {Number} ram How much RAM should be allocated for the node?
 * @param {Number} disk How much disk space be allocated for the node?
 * @param {Number} [daemonPort=8080] What port should the daemon use? Normally 8080
 * @param {Number} [daemonSFTPPort=2022] What port should the daemon use? Normally 2022
 * @param {Number} [ramOverAllocate=-1] How much overallocation for RAM? (Percent)
 * @param {Number} [diskOverallocate=-1] How much overallocation for the Disk? (percent)
 * @param {String} [daemonDir='/var/lib/pterodactyl/volumes'] Directory of the daemon, normally /var/lib/pterodactyl/volumes
 * @param {Boolean} [maintenceMode=false] Is the node in maintence mode? (true/false)
 * @param {Number} [maxUploadSize=100] Must be between 1 and 1024 or you'll get a 422
 * @param {Boolean} [behindProxy=false] Is this node behind a proxy? (true/false)
 */
export default function createNode(name: string, description: string, locationID: number, isPublic: boolean, fqdn: string, scheme: string, ram: number, disk: number, daemonPort?: number, daemonSFTPPort?: number, ramOverAllocate?: number, diskOverallocate?: number, daemonDir?: string, maintenceMode?: boolean, maxUploadSize?: number, behindProxy?: boolean): Promise<NodeAttributes>;
