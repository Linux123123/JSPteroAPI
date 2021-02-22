/** @module ClientServerResources */
export interface ServerResource {
    memory_bytes: number;
    cpu_absolute: number;
    disk_bytes: number;
    network_rx_bytes: number;
    network_tx_bytes: number;
}
export interface ServerResources {
    current_state: string;
    is_suspended: boolean;
    resources: ServerResource;
}
