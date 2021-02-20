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
         * @param {NodeIncludeInput} [options] Include information about relationships
         * @returns {Promise<Node[]>} Array of nodes
         * @example
         * ```js
         * const res = await app.getAllNodes() // res = Node[]
         * ```
         * @example
         * ```js
         * app.getAllNodes().then((res) => console.log(res)) // res = Node[]
         * ```
         */
        this.getAllNodes = async (options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'data', `/api/application/nodes${Functions_1.default(options)}`);
        };
        /**
         * @param {number} nodeId The node id of which you want to get information
         * @param {NodeIncludeInput} [options] Include information about relationships
         * @returns {Promise<NodeAttributes>} Returns information about node
         * @example
         * ```js
         * const res = await app.getNodeInfo(1) // res = NodeAttributes
         * ```
         * @example
         * ```js
         * app.getNodeInfo(1).then((res) => console.log(res)) // res = NodeAttributes
         * ```
         */
        this.getNodeInfo = async (nodeId, options) => {
            return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, 'attributes', `/api/application/nodes/${nodeId}${Functions_1.default(options)}`);
        };
        /**
         * @param {String} name The name of the node
         * @param {String} description A description for the node
         * @param {Number} locationId Location ID to use
         * @param {String} fqdn Fully Qualified Domain Name (If you're using an IP scheme needs to be http)
         * @param {String} scheme Scheme to use: http or https
         * @param {Number} ram How much RAM should be allocated for the node?
         * @param {Number} disk How much disk space be allocated for the node?
         * @param {Boolean} [isPublic=true] Is this node public?
         * @param {Number} [daemonPort=8080] The daemon port (default 8080)
         * @param {Number} [daemonSFTPPort=2022] The daemon sftp port (default 2022)
         * @param {Number} [ramOverAllocate=-1] Ram overallocation (default -1)
         * @param {Number} [diskOverallocate=-1] Disk overallocation (default -1)
         * @param {String} [daemonDir="/var/lib/pterodactyl/volumes"] Directory of the daemon, normally /var/lib/pterodactyl/volumes
         * @param {Boolean} [maintenceMode=false] Is the node in maintence mode?
         * @param {Number} [maxUploadSize=100] Upload size (1-1024)
         * @param {Boolean} [behindProxy=false] Is the node behind a proxy?
         * @param {NodeIncludeInput} [options] Include information about relationships
         * @returns {NodeAttributes} Information about the new node
         * @example
         * ```js
         * const res = await app.createNode('NEW node', 'Good node', 1, 'node.gfd.com', 'https', 8192, 500000) // res = NodeAttributes
         * ```
         * @example
         * ```js
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
         * @param {number} nodeId The node id of which you want to get information
         * @param {string} [name] The name of the node
         * @param {string} [description] A description for the node
         * @param {number} [locationId] Location ID to use
         * @param {string} [fqdn] Fully Qualified Domain Name (If you're using an IP scheme needs to be http)
         * @param {string} [scheme] Scheme to use: http or https
         * @param {number} [ram] How much RAM should be allocated for the node?
         * @param {number} [disk] How much disk space be allocated for the node?
         * @param {boolean} [isPublic] Is this node public?
         * @param {number} [daemonPort] The daemon port (default 8080)
         * @param {number} [daemonSFTPPort] The daemon sftp port (default 2022)
         * @param {number} [ramOverAllocate] Ram overallocation (default -1)
         * @param {number} [diskOverallocate] Disk overallocation (default -1)
         * @param {string} [daemonDir] Directory of the daemon, normally /var/lib/pterodactyl/volumes
         * @param {boolean} [maintenceMode] Is the node in maintence mode?
         * @param {number} [maxUploadSize] Upload size (1-1024)
         * @param {boolean} [behindProxy] Is the node behind a proxy?
         * @param {boolean} [resetSecret] Reset daemonds token?
         * @param {NodeIncludeInput} [options] Include information about relationships
         * @returns {NodeAttributes} Information about the new node
         * @example
         * ```js
         * const res = await app.editNode('NEW node', 'Good node', 1, 'node.gfd.com', 'https', 8192, 500000) // res = NodeAttributes
         * ```
         * @example
         * ```js
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
     * @param {number} nodeId The node id of which you want to get information
     * @returns {Promise<NodeConfig>} Returns information about node config
     * @example
     * ```js
     * const res = await app.getNodeConfig(1) // res = NodeConfig
     * ```
     * @example
     * ```js
     * app.getNodeConfig(1).then((res) => console.log(res)) // res = NodeConfig
     * ```
     */
    async getNodeConfig(nodeId) {
        return new ApplicationRequest_1.default(this.host, this.key).request('GET', null, '', `/api/application/nodes/${nodeId}/configuration`);
    }
    /**
     * @param {number} nodeId The node id of which you want to get information
     * @returns {Promise<string>} If successful returns Successfully deleted!
     * @example
     * ```js
     * const res = await app.deleteNode(1) // res = Successfully deleted!
     * ```
     * @example
     * ```js
     * app.deleteNode(1).then((res) => console.log(res)) // res = Successfully deleted!
     * ```
     */
    async deleteNode(nodeId) {
        return new ApplicationRequest_1.default(this.host, this.key).request('DELETE', null, 'Successfully deleted!', `/api/application/nodes/${nodeId}`);
    }
}
exports.default = nodeMethods;
