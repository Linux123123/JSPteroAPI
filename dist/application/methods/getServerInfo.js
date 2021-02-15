"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {Number} ServerID The server ID to get the details of.
 */
async function getServerInfo(ServerID) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('getServerInfo', 'GET', null, 'attributes', `/api/application/servers/${ServerID}`, false);
}
exports.default = getServerInfo;
