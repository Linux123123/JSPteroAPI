import { Backup, BackupAttributes, Backups } from 'client/interfaces/Backups';
import { paginate } from '../../modules/Functions';
import { Client } from '../index';

export class backupMethods {
  constructor(private readonly client: Client) {}
  /**
   * @internal
   */
  private getBackups = async (serverId: string): Promise<Backups> => {
    return this.client.request(
      'GET',
      null,
      '',
      `/api/client/servers/${serverId}/backups`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @returns An array of backups
   * @example
   * ```ts
   * const res = await client.getAllBackups('7e74354d') // res = Backup[]
   * ```
   * @example
   * ```ts
   * client.getAllBackups('7e74354d').then((res) => console.log(res)) // res = Backup[]
   * ```
   */
  public getAllBackups = async (serverId: string): Promise<Backup[]> => {
    return await paginate<Backup>(this.getBackups.bind(this, serverId), {});
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param name - Name of the backup
   * @param ignored - Ignored files / folders
   * @returns Backup information
   * @example
   * ```ts
   * const res = await client.createBackup('7e74354d') // res = BackupAttributes
   * ```
   * @example
   * ```ts
   * client.createBackup('7e74354d', 'RandomBackup').then((res) => console.log(res)) // res = BackupAttributes
   * ```
   */
  public createBackup = async (
    serverId: string,
    name = '',
    ignored: string[] = [],
    isLocked = false
  ): Promise<BackupAttributes> => {
    return this.client.request(
      'POST',
      {
        name: name,
        ignored: ignored.join(' '),
        is_locked: isLocked
      },
      'attributes',
      `/api/client/servers/${serverId}/backups`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param backupId - ID of the backup to get
   * @returns Backup information
   * @example
   * ```ts
   * const res = await client.getBackupInfo('7e74354d', '3a4e4b2a') // res = BackupAttributes
   * ```
   * @example
   * ```ts
   * client.getBackupInfo('7e74354d', '3a4e4b2a').then((res) => console.log(res)) // res = BackupAttributes
   * ```
   */
  public getBackupInfo = async (
    serverId: string,
    backupId: string
  ): Promise<BackupAttributes> => {
    return this.client.request(
      'GET',
      null,
      'attributes',
      `/api/client/servers/${serverId}/backups/${backupId}`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param backupId - ID of the backup to get
   * @returns Returns backup download url
   * @example
   * ```ts
   * const res = await client.getBackupDownloadLink('7e74354d', '3a4e4b2a') // res = url (string)
   * ```
   * @example
   * ```ts
   * client.getBackupDownloadLink('7e74354d', '3a4e4b2a').then((res) => console.log(res)) // res = url (string)
   * ```
   */
  public getBackupDownloadLink = async (
    serverId: string,
    backupId: string
  ): Promise<string> => {
    return this.client.request(
      'GET',
      null,
      'attributes.url',
      `/api/client/servers/${serverId}/backups/${backupId}/download`
    );
  };
  /**
   * @param serverId - ID of the server to get (In the settings tab of server/in link)
   * @param backupId - ID of the backup to delete
   * @returns Backup information
   * @example
   * ```ts
   * const res = await client.deleteBackup('7e74354d', '3a4e4b2a') // res = Backup successfully deleted!
   * ```
   * @example
   * ```ts
   * client.deleteBackup('7e74354d', '3a4e4b2a').then((res) => console.log(res)) // res = Backup successfully deleted!
   * ```
   */
  public deleteBackup = async (
    serverId: string,
    backupId: string
  ): Promise<string> => {
    return this.client.request(
      'DELETE',
      null,
      'Backup successfully deleted!',
      `/api/client/servers/${serverId}/backups/${backupId}`
    );
  };
}
