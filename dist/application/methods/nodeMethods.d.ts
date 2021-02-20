import Node, { NodeAttributes, NodeConfig, NodeIncludeInput } from '../interfaces/Node';
export default class nodeMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getAllNodes: (options?: NodeIncludeInput | undefined) => Promise<Node[]>;
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
    getNodeInfo: (nodeId: number, options?: NodeIncludeInput | undefined) => Promise<NodeAttributes>;
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
    getNodeConfig(nodeId: number): Promise<NodeConfig>;
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
    createNode: (name: string, description: string, locationID: number, fqdn: string, scheme: 'http' | 'https', ram: number, disk: number, isPublic?: boolean, daemonPort?: number, daemonSFTPPort?: number, ramOverAllocate?: number, diskOverallocate?: number, daemonDir?: string, maintenceMode?: boolean, maxUploadSize?: number, behindProxy?: boolean, options?: NodeIncludeInput | undefined) => Promise<NodeAttributes>;
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
    editNode: (nodeId: number, name?: string | undefined, description?: string | undefined, locationID?: number | undefined, fqdn?: string | undefined, scheme?: "http" | "https" | undefined, ram?: number | undefined, disk?: number | undefined, isPublic?: boolean | undefined, daemonPort?: number | undefined, daemonSFTPPort?: number | undefined, ramOverAllocate?: number | undefined, diskOverallocate?: number | undefined, daemonDir?: string | undefined, maintenceMode?: boolean | undefined, maxUploadSize?: number | undefined, behindProxy?: boolean | undefined, resetSecret?: boolean, options?: NodeIncludeInput | undefined) => Promise<NodeAttributes>;
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
    deleteNode(nodeId: number): Promise<string>;
}
