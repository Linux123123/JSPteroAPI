/** @module Backups */

export interface BackupAttributes {
  uuid: string;
  name: string;
  ignored_files: string[];
  checksum: string;
  bytes: number;
  created_at: string;
  completed_at: string;
  is_successful: boolean;
  is_locked: boolean;
}

export interface Backup {
  object: 'backup';
  attributes: BackupAttributes;
}

export interface Backups {
  object: 'list';
  data: Backup[];
  meta: {
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}
