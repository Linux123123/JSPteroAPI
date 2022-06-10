/** @module ApplicationAllocation */
import { Node } from './Node';
import { Server } from './Server';

export interface AllocationIncludeInput {
  node?: boolean;
  server?: boolean;
}

export interface AllocationFilterInput {
  filter: string;
  filterBy: 'ip' | 'port' | 'ip_alias' | 'server_id';
}

export interface AllocationRelationships {
  server?: Server;
  node?: Node;
}

export interface AllocationAttributes {
  id: number;
  ip: string;
  alias: string | null;
  port: number;
  notes: string | null;
  assigned: boolean;
  relationships?: AllocationRelationships;
}

export interface Allocation {
  onject: string;
  attributes: AllocationAttributes;
}

export interface Allocations {
  object: string;
  data: Allocation[];
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
