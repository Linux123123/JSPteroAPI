"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {Number} internalId Internal ID of the server to delete
 */
async function deleteServer(internalId) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('deleteServer', 'DELETE', null, 'delServer', `/api/application/servers/${internalId}`, false);
}
exports.default = deleteServer;
