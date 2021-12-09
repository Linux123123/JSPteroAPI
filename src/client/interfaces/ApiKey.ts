/** @module ClientApiKey */

export interface ApiKeyAttributes {
  identifier: string;
  description: string;
  allowed_ips: string[];
  last_used_at: string | null;
  created_at: string;
}

export interface ApiKeyMeta {
  secret_token: string;
}

export interface ApiKey {
  object: 'api_key';
  attributes: ApiKeyAttributes;
  meta?: ApiKeyMeta;
}

export interface ApiKeyList {
  object: 'list';
  data: ApiKey[];
}
