import Request from '../ApplicationRequest';
import makeIncludes from '../../modules/Functions';
import Node, {
    NodeAttributes,
    NodeConfig,
    NodeIncludeInput,
} from '../interfaces/Node';
export default class nodeMethods {
    public constructor(private host: string, private key: string) {}
    /**
     * @example
     *   const res = await app.getAllNodes(); // res = Node[]
     *
     * @example
     *   app.getAllNodes().then((res) => console.log(res)); // res = Node[]
     *
     * @param {NodeIncludeInput} [options] Include information about relationships
     * @returns {Promise<Node[]>} Array of nodes
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
     * @example
     *   const res = await app.getNodeInfo(1); // res = NodeAttributes
     *
     * @example
     *   app.getNodeInfo(1).then((res) => console.log(res)); // res = NodeAttributes
     *
     * @param {Number} nodeId The node id of which you want to get information
     * @param {NodeIncludeInput} [options] Include information about relationships
     * @returns {Promise<NodeAttributes>} Returns information about node
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
     * @example
     *   const res = await app.getNodeConfig(1); // res = NodeConfig
     *
     * @example
     *   app.getNodeConfig(1).then((res) => console.log(res)); // res = NodeConfig
     *
     * @param {Number} nodeId The node id of which you want to get information
     * @returns {Promise<NodeConfig>} Returns information about node config
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
     * @example
     *   const res = await app.createNode(
     *       'NEW node',
     *       'Good node',
     *       1,
     *       'node.gfd.com',
     *       'https',
     *       8192,
     *       500000,
     *   ); // res = NodeAttributes
     *
     * @example
     *   app.createNode(
     *       'NEW node',
     *       'Good node',
     *       1,
     *       'node.gfd.com',
     *       'https',
     *       8192,
     *       500000,
     *   ).then((res) => console.log(res)); // res = NodeAttributes
     *
     * @param {String} name The name of the node
     * @param {String} description A description for the node
     * @param {Number} locationId Location ID to use
     * @param {String} fqdn Fully Qualified Domain Name (If you're using an IP
     *   scheme needs to be http)
     * @param {String} scheme Scheme to use: http or https
     * @param {Number} ram How much RAM should be allocated for the node?
     * @param {Number} disk How much disk space be allocated for the node?
     * @param {Boolean} [isPublic=true] Is this node public?. Default is `true`
     * @param {Number} [daemonPort=8080] The daemon port (default 8080). Default is `8080`
     * @param {Number} [daemonSFTPPort=2022] The daemon sftp port (default
     *   2022). Default is `2022`
     * @param {Number} [ramOverAllocate=-1] Ram overallocation (default -1).
     *   Default is `-1`
     * @param {Number} [diskOverallocate=-1] Disk overallocation (default -1).
     *   Default is `-1`
     * @param {String} [daemonDir="/var/lib/pterodactyl/volumes"] Directory of
     *   the daemon, normally /var/lib/pterodactyl/volumes. Default is
     *   `"/var/lib/pterodactyl/volumes"`. Default is `"/var/lib/pterodactyl/volumes"`
     * @param {Boolean} [maintenceMode=false] Is the node in maintence mode?.
     *   Default is `false`
     * @param {Number} [maxUploadSize=100] Upload size (1-1024). Default is `100`
     * @param {Boolean} [behindProxy=false] Is the node behind a proxy?. Default
     *   is `false`. Default is `false`
     * @param {NodeIncludeInput} [options] Include information about relationships
     * @returns {NodeAttributes} Information about the new node
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
     * @example
     *   const res = await app.editNode(
     *       'NEW node',
     *       'Good node',
     *       1,
     *       'node.gfd.com',
     *       'https',
     *       8192,
     *       500000,
     *   ); // res = NodeAttributes
     *
     * @example
     *   app.editNode(
     *       'NEW node',
     *       undefined,
     *       1,
     *       'node.gfd.com',
     *       undefined,
     *       8192,
     *       500000,
     *   ).then((res) => console.log(res)); // res = NodeAttributes
     *
     * @param {Number} nodeId The node id of which you want to get information
     * @param {String} [name] The name of the node
     * @param {String} [description] A description for the node
     * @param {Number} [locationId] Location ID to use
     * @param {String} [fqdn] Fully Qualified Domain Name (If you're using an IP
     *   scheme needs to be http)
     * @param {String} [scheme] Scheme to use: http or https
     * @param {Number} [ram] How much RAM should be allocated for the node?
     * @param {Number} [disk] How much disk space be allocated for the node?
     * @param {Boolean} [isPublic] Is this node public?
     * @param {Number} [daemonPort] The daemon port (default 8080)
     * @param {Number} [daemonSFTPPort] The daemon sftp port (default 2022)
     * @param {Number} [ramOverAllocate] Ram overallocation (default -1)
     * @param {Number} [diskOverallocate] Disk overallocation (default -1)
     * @param {String} [daemonDir] Directory of the daemon, normally
     *   /var/lib/pterodactyl/volumes
     * @param {Boolean} [maintenceMode] Is the node in maintence mode?
     * @param {Number} [maxUploadSize] Upload size (1-1024)
     * @param {Boolean} [behindProxy] Is the node behind a proxy?
     * @param {Boolean} [resetSecret] Reset daemonds token?
     * @param {NodeIncludeInput} [options] Include information about relationships
     * @returns {NodeAttributes} Information about the new node
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
     * @example
     *   const res = await app.deleteNode(1); // res = Successfully deleted!
     *
     * @example
     *   app.deleteNode(1).then((res) => console.log(res)); // res = Successfully deleted!
     *
     * @param {Number} nodeId The node id of which you want to get information
     * @returns {Promise<string>} If successful returns Successfully deleted!
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
