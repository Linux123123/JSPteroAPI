import { Node, NodeAttributes, NodeConfig, NodeIncludeInput } from '../interfaces/Node';
export declare class nodeMethods {
    private host;
    private key;
    constructor(host: string, key: string);
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
    getAllNodes: (options?: NodeIncludeInput | undefined) => Promise<Node[]>;
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
    getNodeInfo: (nodeId: number, options?: NodeIncludeInput | undefined) => Promise<NodeAttributes>;
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
    getNodeConfig(nodeId: number): Promise<NodeConfig>;
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
    createNode: (name: string, description: string, locationID: number, fqdn: string, scheme: 'http' | 'https', ram: number, disk: number, isPublic?: boolean, daemonPort?: number, daemonSFTPPort?: number, ramOverAllocate?: number, diskOverallocate?: number, daemonDir?: string, maintenceMode?: boolean, maxUploadSize?: number, behindProxy?: boolean, options?: NodeIncludeInput | undefined) => Promise<NodeAttributes>;
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
    editNode: (nodeId: number, name?: string | undefined, description?: string | undefined, locationID?: number | undefined, fqdn?: string | undefined, scheme?: "http" | "https" | undefined, ram?: number | undefined, disk?: number | undefined, isPublic?: boolean | undefined, daemonPort?: number | undefined, daemonSFTPPort?: number | undefined, ramOverAllocate?: number | undefined, diskOverallocate?: number | undefined, daemonDir?: string | undefined, maintenceMode?: boolean | undefined, maxUploadSize?: number | undefined, behindProxy?: boolean | undefined, resetSecret?: boolean, options?: NodeIncludeInput | undefined) => Promise<NodeAttributes>;
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
    deleteNode(nodeId: number): Promise<string>;
}
