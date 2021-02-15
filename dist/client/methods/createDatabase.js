"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRequest_1 = __importDefault(require("../ClientRequest"));
/**
 * @param {String} serverId ID of the server to create database to
 * @param {String} databaseName Database name
 * @param {(string|string[])} [connectionsAllowedFrom='%'] Connections allowed from
 */
async function createDatabase(serverId, databaseName, connectionsAllowedFrom = '%') {
    const Req = new ClientRequest_1.default(process.env.ClientHost, process.env.ClientKey);
    const data = { database: databaseName, remote: connectionsAllowedFrom };
    return Req.request('createDatabase', 'POST', data, 'attributes', `/api/client/servers/${serverId}/databases`, true);
}
exports.default = createDatabase;
