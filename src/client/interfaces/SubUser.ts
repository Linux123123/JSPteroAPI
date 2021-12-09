/** @module ClientSubUser */

export type SubuserPermission =
  | 'websocket.connect'
  | 'control.console'
  | 'control.start'
  | 'control.stop'
  | 'control.restart'
  | 'user.create'
  | 'user.read'
  | 'user.update'
  | 'user.delete'
  | 'file.create'
  | 'file.read'
  | 'file.update'
  | 'file.delete'
  | 'file.archive'
  | 'file.sftp'
  | 'allocation.read'
  | 'allocation.update'
  | 'startup.read'
  | 'startup.update'
  | 'database.create'
  | 'database.read'
  | 'database.update'
  | 'database.delete'
  | 'database.view_password'
  | 'schedule.create'
  | 'schedule.read'
  | 'schedule.update'
  | 'schedule.delete';

export interface SubUserAttributes {
  'uuid': string;
  'username': string;
  'email': string;
  'image': string;
  '2fa_enabled': boolean;
  'created_at': string;
  'permissions': SubuserPermission[];
}

export interface SubUser {
  object: 'server_subuser';
  attributes: SubUserAttributes;
}
