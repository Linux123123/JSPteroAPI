"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRequest_1 = __importDefault(require("../ClientRequest"));
const getAllDatabases_1 = __importDefault(require("./getAllDatabases"));
/**
 * @param {String} serverId ID of the server to create database to
 * @param {String} databaseName Database name (e. g. s5_hello)
 */
async function rotateDatabasePass(serverId, databaseName) {
    const databases = await getAllDatabases_1.default(serverId);
    const database = databases.find((db) => db.attributes.name === databaseName);
    if (!database)
        throw new Error('Database not found');
    const Req = new ClientRequest_1.default(process.env.ClientHost, process.env.ClientKey);
    return Req.request('rotateDatabasePass', 'POST', null, 'attributes', `/api/client/servers/${serverId}/databases/${database.attributes.id}/rotate-password`, false);
}
exports.default = rotateDatabasePass;
