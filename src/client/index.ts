import { Request } from '../modules/Request';
import { serverMethods } from './methods/server';
import { consoleMethods } from './methods/console';
import { fileMethods } from './methods/file';
import { databaseMethods } from './methods/database';
import { accountMethods } from './methods/account';
import { scheduleMethods } from './methods/schedule';
import { JSPteroAPIError } from '../modules/Error';
import { networkMethods } from './methods/network';
import { subUserMethods } from './methods/subUser';
import { backupMethods } from './methods/backups';
import { settingsMethods } from './methods/settings';

class Client {
  /**
   * @param host - Panels address
   * @param key - Api key to use
   * @param errorHandler - A custom function to handle errors
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
    // Server
    const servermethods = new serverMethods(this);
    this.getAllServers = servermethods.getAllServers;
    this.getServerInfo = servermethods.getServerInfo;
    this.getServerResources = servermethods.getServerResources;
    this.sendCommand = servermethods.sendCommand;
    this.setPowerState = servermethods.setPowerState;
    // Console
    const consolemethods = new consoleMethods(this, this.errorHandler);
    this.startConsoleConnection = consolemethods.startConsoleConnection;
    // File
    const filemethods = new fileMethods(this);
    this.getAllFiles = filemethods.getAllFiles;
    this.getFileContents = filemethods.getFileContents;
    this.writeFile = filemethods.writeFile;
    this.renameFile = filemethods.renameFile;
    this.copyFile = filemethods.copyFile;
    this.getFileDownloadLink = filemethods.getFileDownloadLink;
    this.compressFile = filemethods.compressFile;
    this.decompressFile = filemethods.decompressFile;
    this.deleteFile = filemethods.deleteFile;
    this.createFolder = filemethods.createFolder;
    this.getFileUploadLink = filemethods.getFileUploadLink;
    // Database
    const databasemethods = new databaseMethods(this);
    this.getAllDatabases = databasemethods.getAllDatabases;
    this.createDatabase = databasemethods.createDatabase;
    this.deleteDatabase = databasemethods.deleteDatabase;
    this.rotateDatabasePass = databasemethods.rotateDatabasePass;
    // Account
    const accountmethods = new accountMethods(this);
    this.getAllPermissions = accountmethods.getAllPermissions;
    this.getAccountInfo = accountmethods.getAccountInfo;
    this.getAccount2FADetails = accountmethods.getAccount2FADetails;
    this.enable2FA = accountmethods.enable2FA;
    this.updateEmail = accountmethods.updateEmail;
    this.updatePassword = accountmethods.updatePassword;
    this.getAllApiKeys = accountmethods.getAllApiKeys;
    this.createApiKey = accountmethods.createApiKey;
    this.deleteApiKey = accountmethods.deleteApiKey;
    // Schedule
    const schedulemethods = new scheduleMethods(this);
    this.getAllSchedules = schedulemethods.getAllSchedules;
    this.createSchedule = schedulemethods.createSchedule;
    this.getScheduleInfo = schedulemethods.getScheduleInfo;
    this.editSchedule = schedulemethods.editSchedule;
    // Network
    const networkmethods = new networkMethods(this);
    this.getAllAlocations = networkmethods.getAllAlocations;
    this.assignAllocation = networkmethods.assignAllocation;
    this.setAllocationNote = networkmethods.setAllocationNote;
    this.setAllocationPrimary = networkmethods.setAllocationPrimary;
    this.deleteAllocation = networkmethods.deleteAllocation;
    // SubUsers
    const subusermethods = new subUserMethods(this);
    this.getAllSubUsers = subusermethods.getAllSubUsers;
    this.createSubUser = subusermethods.createSubUser;
    this.getSubUserInfo = subusermethods.getSubUserInfo;
    this.updateSubUserPermissions = subusermethods.updateSubUserPermissions;
    this.deleteSubUser = subusermethods.deleteSubUser;
    // Backups
    const backupmethods = new backupMethods(this);
    this.getAllBackups = backupmethods.getAllBackups;
    this.createBackup = backupmethods.createBackup;
    this.getBackupInfo = backupmethods.getBackupInfo;
    this.getBackupDownloadLink = backupmethods.getBackupDownloadLink;
    this.deleteBackup = backupmethods.deleteBackup;
    this.toggleLockBackup = backupmethods.toggleLockBackup;
    this.restoreBackup = backupmethods.restoreBackup;
    // Settings
    const settingsmethods = new settingsMethods(this);
    this.renameServer = settingsmethods.renameServer;
    this.reinstallServer = settingsmethods.reinstallServer;

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
          if (e.HTML_STATUS === 403) e.ERRORS = ['Invalid Client API key'];
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

  // Get
  public getAllServers;
  public getServerInfo;
  public getServerResources;
  public getAllPermissions;
  public getAllDatabases;
  public getAllFiles;
  public getFileContents;
  public getFileDownloadLink;
  public getFileUploadLink;
  public getAccountInfo;
  public getAccount2FADetails;
  public getAllApiKeys;
  public getAllSchedules;
  public getScheduleInfo;
  public getAllAlocations;
  public getAllSubUsers;
  public getSubUserInfo;
  public getAllBackups;
  public getBackupInfo;
  public getBackupDownloadLink;
  // POST
  public sendCommand;
  public setPowerState;
  public createDatabase;
  public rotateDatabasePass;
  public copyFile;
  public writeFile;
  public compressFile;
  public decompressFile;
  public deleteFile;
  public createFolder;
  public enable2FA;
  public createApiKey;
  public createSchedule;
  public editSchedule;
  public assignAllocation;
  public setAllocationNote;
  public setAllocationPrimary;
  public createSubUser;
  public updateSubUserPermissions;
  public createBackup;
  public renameServer;
  public reinstallServer;
  public toggleLockBackup;
  public restoreBackup;
  // Delete
  public deleteDatabase;
  public deleteApiKey;
  public deleteAllocation;
  public deleteSubUser;
  public deleteBackup;
  // PUT
  public renameFile;
  public updateEmail;
  public updatePassword;

  public startConsoleConnection;
}

export { Client };
