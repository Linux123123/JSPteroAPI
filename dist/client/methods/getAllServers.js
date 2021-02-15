"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRequest_1 = __importDefault(require("../ClientRequest"));
/**
 * @yields A Array of servers a application key has access to
 */
async function getAllServers() {
    const Req = new ClientRequest_1.default(process.env.ClientHost, process.env.ClientKey);
    return Req.request('getAllServer', 'GET', null, 'data', '/api/client', false);
}
exports.default = getAllServers;
