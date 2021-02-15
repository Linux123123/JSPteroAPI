"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
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
async function createNode(name, description, locationID, isPublic, fqdn, scheme, ram, disk, daemonPort = 8080, daemonSFTPPort = 2022, ramOverAllocate = -1, diskOverallocate = -1, daemonDir = '/var/lib/pterodactyl/volumes', maintenceMode = false, maxUploadSize = 100, behindProxy = false) {
    const data = makeData(name, description, locationID, isPublic, fqdn, scheme, ram, disk, daemonPort, daemonSFTPPort, ramOverAllocate, diskOverallocate, daemonDir, maintenceMode, maxUploadSize, behindProxy);
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('createNode', 'POST', data, 'attributes', '/api/application/nodes', true);
}
exports.default = createNode;
function makeData(name, description, locationID, isPublic, fqdn, scheme, ram, disk, daemonPort, daemonSFTPPort, ramOverAllocate, diskOverallocate, daemonDir, maintenceMode, maxUploadSize, behindProxy) {
    return {
        name: name,
        description: description,
        location_id: locationID,
        public: isPublic,
        fqdn: fqdn,
        scheme: scheme,
        behind_proxy: behindProxy,
        memory: ram,
        memory_overallocate: ramOverAllocate,
        disk: disk,
        disk_overallocate: diskOverallocate,
        daemon_base: daemonDir,
        daemon_listen: daemonPort,
        daemon_sftp: daemonSFTPPort,
        maintenance_mode: maintenceMode,
        upload_size: maxUploadSize,
    };
}
