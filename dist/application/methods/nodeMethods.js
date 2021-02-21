"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
const Functions_1 = __importDefault(require("../../modules/Functions"));
class nodeMethods {
    constructor(host, key) {
        this.host = host;
        this.key = key;
        /**
         * @param options - Include information about relationships
         * @returns Array of nodes
         * @example
         * ```ts
         * const res = await app.getAllNodes() // res = Node[]
         * ```
         * @example
         * ```ts
         * app.getAllNodes().then((res) => console.log(res)) // res = Node[]
         * ```
         */
        this.getAllNodes = async (options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'data', `/api/application/nodes${Functions_1.default(options)}`);
        };
        /**
         * @param nodeId - The node id of which you want to get information
         * @param options - Include information about relationships
         * @returns Returns information about node
         * @example
         * ```ts
         * const res = await app.getNodeInfo(1) // res = NodeAttributes
         * ```
         * @example
         * ```ts
         * app.getNodeInfo(1).then((res) => console.log(res)) // res = NodeAttributes
         * ```
         */
        this.getNodeInfo = async (nodeId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/application/nodes/${nodeId}${Functions_1.default(options)}`);
        };
        /**
         * @param name - The name of the node
         * @param description - A description for the node
         * @param locationId - Location ID to use
         * @param fqdn - Fully Qualified Domain Name (If you're using an IP scheme needs to be http)
         * @param scheme - Scheme to use: http or https
         * @param ram - How much RAM should be allocated for the node?
         * @param disk - How much disk space be allocated for the node?
         * @param isPublic - Is this node public?
         * @param daemonPort - The daemon port (default 8080)
         * @param daemonSFTPPort - The daemon sftp port (default 2022)
         * @param ramOverAllocate - Ram overallocation (default -1)
         * @param diskOverallocate - Disk overallocation (default -1)
         * @param daemonDir - Directory of the daemon, normally /var/lib/pterodactyl/volumes
         * @param maintenceMode - Is the node in maintence mode?
         * @param maxUploadSize - Upload size (1-1024)
         * @param behindProxy - Is the node behind a proxy?
         * @param options - Include information about relationships
         * @returns Information about the new node
         * @example
         * ```ts
         * const res = await app.createNode('NEW node', 'Good node', 1, 'node.gfd.com', 'https', 8192, 500000) // res = NodeAttributes
         * ```
         * @example
         * ```ts
         * app.createNode('NEW node', 'Good node', 1, 'node.gfd.com', 'https', 8192, 500000).then((res) => console.log(res)) // res = NodeAttributes
         * ```
         */
        this.createNode = async (name, description, locationID, fqdn, scheme, ram, disk, isPublic = true, daemonPort = 8080, daemonSFTPPort = 2022, ramOverAllocate = -1, diskOverallocate = -1, daemonDir = '/var/lib/pterodactyl/volumes', maintenceMode = false, maxUploadSize = 100, behindProxy = false, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('POST', {
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
            }, 'attributes', `/api/application/nodes${Functions_1.default(options)}`);
        };
        /**
         * @param nodeId - The node id of which you want to get information
         * @param name - The name of the node
         * @param description - A description for the node
         * @param locationId - Location ID to use
         * @param fqdn - Fully Qualified Domain Name (If you're using an IP scheme needs to be http)
         * @param scheme - Scheme to use: http or https
         * @param ram - How much RAM should be allocated for the node?
         * @param disk - How much disk space be allocated for the node?
         * @param isPublic - Is this node public?
         * @param daemonPort - The daemon port (default 8080)
         * @param daemonSFTPPort - The daemon sftp port (default 2022)
         * @param ramOverAllocate - Ram overallocation (default -1)
         * @param diskOverallocate - Disk overallocation (default -1)
         * @param daemonDir - Directory of the daemon, normally /var/lib/pterodactyl/volumes
         * @param maintenceMode - Is the node in maintence mode?
         * @param maxUploadSize - Upload size (1-1024)
         * @param behindProxy - Is the node behind a proxy?
         * @param resetSecret - Reset daemonds token?
         * @param options - Include information about relationships
         * @returns Information about the new node
         * @example
         * ```ts
         * const res = await app.editNode('NEW node', 'Good node', 1, 'node.gfd.com', 'https', 8192, 500000) // res = NodeAttributes
         * ```
         * @example
         * ```ts
         * app.editNode('NEW node', undefined, 1, 'node.gfd.com', undefined, 8192, 500000).then((res) => console.log(res)) // res = NodeAttributes
         * ```
         */
        this.editNode = async (nodeId, name, description, locationID, fqdn, scheme, ram, disk, isPublic, daemonPort, daemonSFTPPort, ramOverAllocate, diskOverallocate, daemonDir, maintenceMode, maxUploadSize, behindProxy, resetSecret = false, options) => {
            const node = await this.getNodeInfo(nodeId);
            return new ApplicationRequest_1.default(this.host, this.key).request('PATCH', {
                name: name ? name : node.name,
                description: description ? description : node.description,
                location_id: locationID ? locationID : node.location_id,
                public: isPublic ? isPublic : node.public,
                fqdn: fqdn ? fqdn : node.fqdn,
                scheme: scheme ? scheme : node.scheme,
                behind_proxy: behindProxy ? behindProxy : node.behind_proxy,
                memory: ram ? ram : node.memory,
                memory_overallocate: ramOverAllocate
                    ? ramOverAllocate
                    : node.memory_overallocate,
                disk: disk ? disk : node.disk,
                disk_overallocate: diskOverallocate
                    ? diskOverallocate
                    : node.disk_overallocate,
                daemon_base: daemonDir ? daemonDir : node.daemon_base,
                daemon_listen: daemonPort ? daemonPort : node.daemon_listen,
                daemon_sftp: daemonSFTPPort ? daemonSFTPPort : node.daemon_sftp,
                maintenance_mode: maintenceMode
                    ? maintenceMode
                    : node.maintenance_mode,
                upload_size: maxUploadSize ? maxUploadSize : node.upload_size,
                reset_secret: resetSecret,
            }, 'attributes', `/api/application/nodes/${nodeId}${Functions_1.default(options)}`);
        };
    }
    /**
     * @param nodeId - The node id of which you want to get information
     * @returns Returns information about node config
     * @example
     * ```ts
     * const res = await app.getNodeConfig(1) // res = NodeConfig
     * ```
     * @example
     * ```ts
     * app.getNodeConfig(1).then((res) => console.log(res)) // res = NodeConfig
     * ```
     */
    async getNodeConfig(nodeId) {
        return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, '', `/api/application/nodes/${nodeId}/configuration`);
    }
    /**
     * @param nodeId - The node id of which you want to get information
     * @returns If successful returns Successfully deleted!
     * @example
     * ```ts
     * const res = await app.deleteNode(1) // res = Successfully deleted!
     * ```
     * @example
     * ```ts
     * app.deleteNode(1).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    async deleteNode(nodeId) {
        return new ApplicationRequest_1.default(this.host, this.key).request('DELETE', null, 'Successfully deleted!', `/api/application/nodes/${nodeId}`);
    }
}
exports.default = nodeMethods;
