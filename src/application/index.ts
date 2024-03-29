import { Request } from '../modules/Request';
import { allocationMethods } from './methods/allocation';
import { databaseMethods } from './methods/database';
import { nestMethods } from './methods/nest';
import { nodeMethods } from './methods/node';
import { serverMethods } from './methods/server';
import { userMethods } from './methods/user';
import { locationMethods } from './methods/location';
import { JSPteroAPIError } from '../modules/Error';
class Application {
  /**
   * @param host - Panels address
   * @param key - Api key to use
   * @param fast - Fast login (No credential check)
   */
  public constructor(
    private host: string,
    private key: string,
    private errorHandler = (error: JSPteroAPIError): void => {
      throw error;
    },
    fast = false
  ) {
    host = host.trim();
    if (host.endsWith('/')) host = host.slice(0, -1);
    this.host = host;
    this.request = new Request(this.host, this.key, this.errorHandler).request;
    const servermethods = new serverMethods(this);
    this.getAllServers = servermethods.getAllServers;
    this.getServerInfo = servermethods.getServerInfo;
    this.createServer = servermethods.createServer;
    this.deleteServer = servermethods.deleteServer;
    this.suspendServer = servermethods.suspendServer;
    this.unSuspendServer = servermethods.unSuspendServer;
    this.reinstallServer = servermethods.reinstallServer;
    this.getServerInfoByExtId = servermethods.getServerInfoByExtId;
    this.editServerDetails = servermethods.editServerDetails;
    this.editServerBuild = servermethods.editServerBuild;
    this.editServerStartup = servermethods.editServerStartup;
    const nestmethods = new nestMethods(this);
    this.getAllNests = nestmethods.getAllNests;
    this.getNestInfo = nestmethods.getNestInfo;
    this.getAllNestEggs = nestmethods.getAllNestEggs;
    this.getEggInfo = nestmethods.getEggInfo;
    const databasemethods = new databaseMethods(this);
    this.getServersDatabases = databasemethods.getServersDatabases;
    this.getServersDatabaseInfo = databasemethods.getServersDatabaseInfo;
    this.createDatabase = databasemethods.createDatabase;
    this.resetDatabasePassword = databasemethods.resetDatabasePassword;
    this.deleteDatabase = databasemethods.deleteDatabase;
    const usermethods = new userMethods(this);
    this.getAllUsers = usermethods.getAllUsers;
    this.getUserInfo = usermethods.getUserInfo;
    this.createUser = usermethods.createUser;
    this.editUser = usermethods.editUser;
    this.deleteUser = usermethods.deleteUser;
    const nodemethods = new nodeMethods(this);
    this.getAllNodes = nodemethods.getAllNodes;
    this.getNodeInfo = nodemethods.getNodeInfo;
    this.getNodeConfig = nodemethods.getNodeConfig;
    this.createNode = nodemethods.createNode;
    this.editNode = nodemethods.editNode;
    this.deleteNode = nodemethods.deleteNode;
    const allocationmethods = new allocationMethods(this);
    this.getAllAllocations = allocationmethods.getAllAllocations;
    this.createAllocation = allocationmethods.createAllocation;
    this.deleteAllocation = allocationmethods.deleteAllocation;
    const locationmethods = new locationMethods(this);
    this.getAllLocations = locationmethods.getAllLocations;
    this.getLocationInfo = locationmethods.getLocationInfo;
    this.createLocation = locationmethods.createLocation;
    this.editLocation = locationmethods.editLocation;
    this.deleteLocation = locationmethods.deleteLocation;

    if (!fast) this.testAPI();
  }
  /**
   * @param throwError - Whether to throw an error or return bool
   * @remarks Will not work if using custom error handler.
   */
  public testAPI = async (throwError = true): Promise<boolean> => {
    try {
      await this.getAllServers();
      return true;
    } catch (e) {
      if (e instanceof JSPteroAPIError) {
        if (throwError) {
          if (e.HTML_STATUS === 403) e.ERRORS = ['Invalid Application API key'];
          throw e;
        }
        return false;
      } else {
        if (throwError) throw e;
        return false;
      }
    }
  };

  /**
     @internal
     */
  public request;

  // GET
  public getAllServers;
  public getAllNodes;
  public getAllUsers;
  public getUserInfo;
  public getNodeInfo;
  public getServerInfo;
  public getAllNests;
  public getNestInfo;
  public getAllNestEggs;
  public getEggInfo;
  public getServerInfoByExtId;
  public getServersDatabases;
  public getServersDatabaseInfo;
  public getNodeConfig;
  public getAllAllocations;
  public getAllLocations;
  public getLocationInfo;
  // POST
  public createUser;
  public createServer;
  public createNode;
  public createDatabase;
  public suspendServer;
  public unSuspendServer;
  public reinstallServer;
  public resetDatabasePassword;
  public createAllocation;
  public createLocation;
  // PATCH
  public editUser;
  public editServerDetails;
  public editServerBuild;
  public editServerStartup;
  public editNode;
  public editLocation;
  // DELETE
  public deleteUser;
  public deleteNode;
  public deleteServer;
  public deleteDatabase;
  public deleteAllocation;
  public deleteLocation;
}

export { Application };
