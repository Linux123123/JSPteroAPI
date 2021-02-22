import { Request } from '../ApplicationRequest';
import { makeIncludes } from '../../modules/Functions';
import {
    Node,
    NodeAttributes,
    NodeConfig,
    NodeIncludeInput,
} from '../interfaces/Node';

export class nodeMethods {
    public constructor(private host: string, private key: string) {}
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
    public getAllNodes = async (
        options?: NodeIncludeInput,
    ): Promise<Node[]> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'data',
            `/api/application/nodes${makeIncludes(options)}`,
        );
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
    public getNodeInfo = async (
        nodeId: number,
        options?: NodeIncludeInput,
    ): Promise<NodeAttributes> => {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            'attributes',
            `/api/application/nodes/${nodeId}${makeIncludes(options)}`,
        );
    };
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
    public async getNodeConfig(nodeId: number): Promise<NodeConfig> {
        return new Request(this.host, this.key).request(
            'GET',
            null,
            '',
            `/api/application/nodes/${nodeId}/configuration`,
        );
    }
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
    public createNode = async (
        name: string,
        description: string,
        locationID: number,
        fqdn: string,
        scheme: 'http' | 'https',
        ram: number,
        disk: number,
        isPublic = true,
        daemonPort = 8080,
        daemonSFTPPort = 2022,
        ramOverAllocate = -1,
        diskOverallocate = -1,
        daemonDir = '/var/lib/pterodactyl/volumes',
        maintenceMode = false,
        maxUploadSize = 100,
        behindProxy = false,
        options?: NodeIncludeInput,
    ): Promise<NodeAttributes> => {
        return new Request(this.host, this.key).request(
            'POST',
            {
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
            },
            'attributes',
            `/api/application/nodes${makeIncludes(options)}`,
        );
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
    public editNode = async (
        nodeId: number,
        name?: string,
        description?: string,
        locationID?: number,
        fqdn?: string,
        scheme?: 'http' | 'https',
        ram?: number,
        disk?: number,
        isPublic?: boolean,
        daemonPort?: number,
        daemonSFTPPort?: number,
        ramOverAllocate?: number,
        diskOverallocate?: number,
        daemonDir?: string,
        maintenceMode?: boolean,
        maxUploadSize?: number,
        behindProxy?: boolean,
        resetSecret = false,
        options?: NodeIncludeInput,
    ): Promise<NodeAttributes> => {
        const node = await this.getNodeInfo(nodeId);
        return new Request(this.host, this.key).request(
            'PATCH',
            {
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
            },
            'attributes',
            `/api/application/nodes/${nodeId}${makeIncludes(options)}`,
        );
    };
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
    public async deleteNode(nodeId: number): Promise<string> {
        return new Request(this.host, this.key).request(
            'DELETE',
            null,
            'Successfully deleted!',
            `/api/application/nodes/${nodeId}`,
        );
    }
}
