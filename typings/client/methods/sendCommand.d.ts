/**
 * @param {String} serverId ID of the server to send a command to
 * @param {String} command Command to send
 */
export default function sendCommand(serverId: string, command: string): Promise<string>;
