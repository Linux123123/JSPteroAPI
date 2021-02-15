"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {String} InternalID Internal ID of the server to unsuspend
 */
async function unSuspendServer(internalID) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('unSuspendServer', 'POST', null, 'unSuspServer', `/api/application/servers/${internalID}/unsuspend`, false);
}
exports.default = unSuspendServer;
