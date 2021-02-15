"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRequest_1 = __importDefault(require("../ClientRequest"));
/**
 * @param {String} serverId ID of the server to send a command to
 * @param {String} action start / stop / restart / kill
 */
async function setPowerState(serverId, action) {
    const Req = new ClientRequest_1.default(process.env.ClientHost, process.env.ClientKey);
    const data = { signal: action };
    return Req.request('setPowerState', 'POST', data, 'setPowState', `/api/client/servers/${serverId}/power`, true);
}
exports.default = setPowerState;
