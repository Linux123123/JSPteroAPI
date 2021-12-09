import { makeOptions, MakeOpts, paginate } from '../../modules/Functions';
import {
  EditServerBuild,
  EditServerDetails,
  EditServerStartup,
  Server,
  ServerAttributes,
  ServerEnvironment,
  ServerFilterInput,
  ServerIncludesInput,
  Servers
} from '../interfaces/Server';
import { Application } from '../index';

export class serverMethods {
  constructor(private readonly application: Application) {}
  /**
   * @internal
   */
  private getServers = async (options: MakeOpts): Promise<Servers> => {
    return this.application.request(
      'GET',
      null,
      '',
      `/api/application/servers${makeOptions(options)}`
    );
  };
  /**
   * @param options - Include information about server relationships
   * @param filter - Filter Servers by specific fields and values
   * @returns Array of server
   * @example
   * ```ts
   * const res = await app.getAllServers() // res = Server[]
   * ```
   * @example
   * ```ts
   * app.getAllServers().then((res) => console.log(res)) // res = Server[]
   * ```
   */
  public getAllServers = async (
    options?: ServerIncludesInput,
    filter?: ServerFilterInput
  ): Promise<Server[]> => {
    return await paginate<Server>(this.getServers.bind(this), {
      includes: { ...options },
      filter: filter
    });
  };
  /**
   * @param serverId - The server ID to get the details of.
   * @param options - Include information about server relationships
   * @returns Server information
   * @example
   * ```ts
   * const res = await app.getServerInfo(1) // res = ServerAttributes
   * ```
   * @example
   * ```ts
   * app.getServerInfo(1).then((res) => console.log(res)) // res = ServerAttributes
   * ```
   */
  public getServerInfo = async (
    serverId: number,
    options?: ServerIncludesInput
  ): Promise<ServerAttributes> => {
    return this.application.request(
      'GET',
      null,
      'attributes',
      `/api/application/servers/${serverId}${makeOptions({
        includes: { ...options }
      })}`
    );
  };
  /**
   * @param serverId - The external server ID to get the details of.
   * @param options - Include information about server relationships
   * @returns Server information
   * @example
   * ```ts
   * const res = await app.getServerInfoByExtId('MC_SERVER') // res = ServerAttributes
   * ```
   * @example
   * ```ts
   * app.getServerInfoByExtId('GAMER_SERVER').then((res) => console.log(res)) // res = ServerAttributes
   * ```
   */
  public getServerInfoByExtId = async (
    serverId: string,
    options?: ServerIncludesInput
  ): Promise<ServerAttributes> => {
    return this.application.request(
      'GET',
      null,
      'attributes',
      `/api/application/servers/external/${serverId}${makeOptions({
        includes: { ...options }
      })}`
    );
  };
  /**
   * @param serverId - The server ID to get the details of.
   * @param options - The options to edit
   * @returns Server information
   * @example
   * ```ts
   * const res = await app.editServerDetails(1, 'Mc server') // res = ServerAttributes
   * ```
   * @example
   * ```ts
   * app.editServerDetails(1, undefined, undefined, 'MC_SERVER').then((res) => console.log(res)) // res = ServerAttributes
   * ```
   */
  public editServerDetails = async (
    serverId: number,
    options: EditServerDetails
  ): Promise<ServerAttributes> => {
    const server = await this.getServerInfo(serverId);
    return this.application.request(
      'PATCH',
      {
        name: options.name ?? server.name,
        user: options.userId != undefined ? options.userId : server.user,
        external_id: options.externalId ?? server.external_id,
        description: options.description ?? server.description
      },
      'attributes',
      `/api/application/servers/${serverId}/details${makeOptions({
        includes: { ...options.options }
      })}`
    );
  };
  /**
   * @param serverId - The server ID to get the details of.
   * @param options - The options to edit
   * @returns Server information
   * @example
   * ```ts
   * const res = await app.editServerBuild(1, undefined, undefined, [5, 6]) // res = ServerAttributes
   * ```
   * @example
   * ```ts
   * app.editServerBuild(1, undefined, [1, 3]).then((res) => console.log(res)) // res = ServerAttributes
   * ```
   */
  public editServerBuild = async (
    serverId: number,
    options: EditServerBuild
  ): Promise<ServerAttributes> => {
    const server = await this.getServerInfo(serverId);
    return this.application.request(
      'PATCH',
      {
        allocation:
          options.allocationId != undefined
            ? options.allocationId
            : server.allocation,
        add_allocations: options.addAllocations ?? [],
        remove_allocations: options.removeAllocations ?? [],
        memory:
          options.memory != undefined ? options.memory : server.limits.memory,
        swap: options.swap != undefined ? options.swap : server.limits.swap,
        disk: options.disk != undefined ? options.disk : server.limits.disk,
        io: options.io != undefined ? options.io : server.limits.io,
        cpu: options.cpu != undefined ? options.cpu : server.limits.cpu,
        threads:
          options.threads != undefined
            ? options.threads
            : server.limits.threads,
        feature_limits: {
          databases:
            options.databases != undefined
              ? options.databases
              : server.feature_limits.databases,
          allocations:
            options.allocations != undefined
              ? options.allocations
              : server.feature_limits.allocations,
          backups:
            options.backups != undefined
              ? options.backups
              : server.feature_limits.backups
        }
      },
      'attributes',
      `/api/application/servers/${serverId}/build${makeOptions({
        includes: { ...options.options }
      })}`
    );
  };
  /**
   * @param serverId - The external server ID to get the details of.
   * @param startup - The new startup command
   * @param environment - Servers environment variables. REQUIRED!
   * @param egg - The new egg you want to use
   * @param image - The new docker image you want to use
   * @param skip_scripts - Skip install script boolean (FALSE by default!)
   * @param options - Include information about server relationships
   * @returns Server information
   * @example
   * ```ts
   * const res = await app.editServerStartup(1, 'node index.js') // res = ServerAttributes
   * ```
   * @example
   * ```ts
   * app.editServerStartup(1, 'node index.js').then((res) => console.log(res)) // res = ServerAttributes
   * ```
   */
  public editServerStartup = async (
    serverId: number,
    options: EditServerStartup
  ): Promise<ServerAttributes> => {
    const server = await this.getServerInfo(serverId, { variables: true });
    const envVars: Record<string, unknown> = {};
    if (options.environment) {
      const env = options.environment;
      const givenEnvVars = Object.keys(options.environment);
      server.relationships?.variables?.data.forEach((envVar) => {
        const envVariable = envVar.attributes.env_variable;
        if (givenEnvVars.includes(envVariable)) {
          envVars[envVariable] = env[envVariable];
        } else if (envVar.attributes.server_value) {
          envVars[envVariable] = envVar.attributes.server_value;
        } else if (envVar.attributes.default_value) {
          envVars[envVariable] = envVar.attributes.default_value;
        } else if (envVar.attributes.rules.includes('nullable')) {
          envVars[envVariable] = '';
        } else {
          throw new Error(
            `Environment variable ${envVariable} was not defined!`
          );
        }
      });
    }
    return this.application.request(
      'PATCH',
      {
        startup: options.startup ?? server.container.startup_command,
        environment: options.environment
          ? envVars
          : server.container.environment,
        egg: options.egg != undefined ? options.egg : server.egg,
        image: options.image ?? server.container.image,
        skip_scripts: options.skip_scripts ?? false
      },
      'attributes',
      `/api/application/servers/${serverId}/startup${makeOptions({
        includes: { ...options.options }
      })}`
    );
  };
  /**
   * @param name  -Name of server to create
   * @param ownerId - User ID of who should own this server
   * @param description - Description of server
   * @param nestId - ID of the nest to use when making a server
   * @param eggId - Egg ID to use when installing the server
   * @param environment - Servers environment variables. Some are REQUIRED! If there is a default value and none is provided default is used!
   * @param cpu - Amount of cpu resources to give (1 core = 100) (0 unlimited)
   * @param ram - Amount of memory resources to give (1024 = 1GB) (0 unlimited)
   * @param disk - Amount of disk space to give (1024 = 1GB) (0 unlimited)
   * @param amountOfDatabases - The max amount of databases a server can use
   * @param amountOfAllocations - The max amount of allocation(s) a server can use
   * @param amountOfBackups - The max amount of backups a server can use
   * @param startupCmd - The command to use when starting this server
   * @param dockerImage - The image to use from Docker
   * @param swap - The amount of Swap the server has
   * @param io - Set this to 500.
   * @param options - Include information about server relationships
   * @returns Returns the created server object
   * @example
   * ```ts
   * const res = await app.createServer('BUNGEE', 1, 'BUNGEE SERVER', 1, 1) // res = ServerAttributes
   * ```
   * @example
   * ```ts
   * app.createServer('BUNGEE', 1, 'BUNGEE SERVER', 1, 1).then((res) => console.log(res)) // res = ServerAttributes
   * ```
   */
  public createServer = async (
    name: string,
    ownerId: number,
    description: string,
    nestId: number,
    eggId: number,
    environment?: ServerEnvironment,
    cpu = 0,
    ram = 0,
    disk = 0,
    amountOfDatabases = 0,
    amountOfAllocations = 0,
    amountOfBackups = 0,
    startupCmd?: string,
    dockerImage?: string,
    swap = 0,
    io = 500,
    options?: ServerIncludesInput // Databases are always empty
  ): Promise<ServerAttributes> => {
    const egg = await this.application.getEggInfo(nestId, eggId, {
      variables: true
    });
    const envVars: Record<string, unknown> = {};
    let givenEnvVars: string[] = [];
    if (environment) givenEnvVars = Object.keys(environment);
    egg.relationships?.variables?.data.forEach(
      (envVar: {
        attributes: {
          env_variable: string;
          rules: string;
          default_value: string;
        };
      }) => {
        const envVariable = envVar.attributes.env_variable;
        if (givenEnvVars.includes(envVariable)) {
          envVars[envVariable] = environment?.[envVariable];
        } else if (envVar.attributes.rules.includes('nullable')) {
          envVars[envVariable] = '';
        } else if (envVar.attributes.default_value) {
          envVars[envVariable] = envVar.attributes.default_value;
        } else {
          throw new Error(
            `Environment variable ${envVariable} was not defined!`
          );
        }
      }
    );
    return this.application.request(
      'POST',
      {
        name: name,
        user: ownerId,
        description: description,
        egg: eggId,
        pack: nestId,
        docker_image: dockerImage ? dockerImage : egg.docker_image,
        startup: startupCmd ? startupCmd : egg.startup,
        limits: {
          memory: ram,
          swap: swap,
          disk: disk,
          io: io,
          cpu: cpu
        },
        feature_limits: {
          databases: amountOfDatabases,
          allocations: amountOfAllocations,
          backups: amountOfBackups
        },
        environment: envVars,
        allocation: {
          default: 1,
          additional: []
        },
        deploy: {
          locations: [1],
          dedicated_ip: false,
          port_range: []
        },
        start_on_completion: false,
        skip_scripts: false,
        oom_disabled: false
      },
      'attributes',
      `/api/application/servers${makeOptions({
        includes: { ...options }
      })}`
    );
  };
  /**
   * @param internalId - Internal ID of the server to delete
   * @param forceDelete - Boolean if forcefully delete a server
   * @returns If successful returns Successfully deleted!
   * @example
   * ```ts
   * const res = await app.deleteServer(1) // res = Successfully deleted!
   * ```
   * @example
   * ```ts
   * app.deleteServer(1, true).then((res) => console.log(res)) // res = Successfully deleted!
   * ```
   */
  public deleteServer = async (
    internalId: number,
    forceDelete = false
  ): Promise<string> => {
    let force = '';
    if (forceDelete) force = '/force';
    return this.application.request(
      'DELETE',
      null,
      'Successfully deleted!',
      `/api/application/servers/${internalId}${force}`
    );
  };
  /**
   * @param internalId - Internal ID of the server to suspend
   * @returns If successful returns Successfully suspended!
   * @example
   * ```ts
   * const res = await app.suspendServer(1) // res = Successfully suspended!
   * ```
   * @example
   * ```ts
   * app.suspendServer(1).then((res) => console.log(res)) // res = Successfully suspended!
   * ```
   */
  public suspendServer = (internalID: number): Promise<string> => {
    return this.application.request(
      'POST',
      null,
      'Successfully suspended!',
      `/api/application/servers/${internalID}/suspend`
    );
  };
  /**
   * @param internalId - Internal ID of the server to suspend
   * @returns If successful returns Successfully unsuspended!
   * @example
   * ```ts
   * const res = await app.unSuspendServer(1) // res = Successfully unsuspended!
   * ```
   * @example
   * ```ts
   * app.unSuspendServer(1).then((res) => console.log(res)) // res = Successfully unsuspended!
   * ```
   */
  public unSuspendServer = (internalID: number): Promise<string> => {
    return this.application.request(
      'POST',
      null,
      'Successfully unsuspended!',
      `/api/application/servers/${internalID}/unsuspend`
    );
  };
  /**
   * @param internalId - Internal ID of the server to reinstall
   * @returns If successful returns Successfully reinstalled!
   * @example
   * ```ts
   * const res = await app.reinstallServer(1) // res = Successfully reinstalled!
   * ```
   * @example
   * ```ts
   * app.reinstallServer(1).then((res) => console.log(res)) // res = Successfully reinstalled!
   * ```
   */
  public reinstallServer = (internalID: number): Promise<string> => {
    return this.application.request(
      'POST',
      null,
      'Successfully reinstalled!',
      `/api/application/servers/${internalID}/reinstall`
    );
  };
}
