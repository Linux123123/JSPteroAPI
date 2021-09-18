import { makeOptions, MakeOpts, paginate } from '../../modules/Functions';
import {
    Node,
    NodeAttributes,
    NodeConfig,
    NodeEditOptions,
    NodeFilterInput,
    NodeIncludeInput,
    Nodes,
} from '../interfaces/Node';
import { Application } from '../index';

export class nodeMethods {
    constructor(private readonly application: Application) {}
    /**
     * @internal
     */
    private getNodes = async (options: MakeOpts): Promise<Nodes> => {
        return this.application.request(
            'GET',
            null,
            '',
            `/api/application/nodes${makeOptions(options)}`,
        );
    };
    /**
     * @param options - Include information about relationships
     * @param filter - Filter Nodes by specific fields and values
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
        filter?: NodeFilterInput,
    ): Promise<Node[]> => {
        return await paginate<Node>(this.getNodes.bind(this), {
            includes: { ...options },
            filter: filter,
        });
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
        return this.application.request(
            'GET',
            null,
            'attributes',
            `/api/application/nodes/${nodeId}${makeOptions({
                includes: { ...options },
            })}`,
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
    public getNodeConfig = (nodeId: number): Promise<NodeConfig> => {
        return this.application.request(
            'GET',
            null,
            '',
            `/api/application/nodes/${nodeId}/configuration`,
        );
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
        return this.application.request(
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
            `/api/application/nodes${makeOptions({
                includes: { ...options },
            })}`,
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
        options: NodeEditOptions,
    ): Promise<NodeAttributes> => {
        const node = await this.getNodeInfo(nodeId);
        return this.application.request(
            'PATCH',
            {
                name: options.name ?? node.name,
                description: options.description ?? node.description,
                location_id: options.locationID ?? node.location_id,
                public: options.isPublic ?? node.public,
                fqdn: options.fqdn ?? node.fqdn,
                scheme: options.scheme ?? node.scheme,
                behind_proxy: options.behindProxy ?? node.behind_proxy,
                memory: options.ram ?? node.memory,
                memory_overallocate:
                    options.ramOverAllocate ?? node.memory_overallocate,
                disk: options.disk ?? node.disk,
                disk_overallocate:
                    options.diskOverallocate ?? node.disk_overallocate,
                daemon_base: options.daemonDir ?? node.daemon_base,
                daemon_listen: options.daemonPort ?? node.daemon_listen,
                daemon_sftp: options.daemonSFTPPort ?? node.daemon_sftp,
                maintenance_mode:
                    options.maintenceMode ?? node.maintenance_mode,
                upload_size: options.maxUploadSize ?? node.upload_size,
                reset_secret: options.resetSecret,
            },
            'attributes',
            `/api/application/nodes/${nodeId}${makeOptions({
                includes: { ...options.options },
            })}`,
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
    public deleteNode = async (nodeId: number): Promise<string> => {
        return this.application.request(
            'DELETE',
            null,
            'Successfully deleted!',
            `/api/application/nodes/${nodeId}`,
        );
    };
}
