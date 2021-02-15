"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {String} internalID Internal ID of the server to suspend
 */
async function suspendServer(internalID) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('suspendServer', 'POST', null, 'suspServer', `/api/application/servers/${internalID}/suspend`, false);
}
exports.default = suspendServer;
