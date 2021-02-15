"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRequest_1 = __importDefault(require("../ClientRequest"));
/**
 * @yields {Object} Permissions Object
 */
async function getPermissions() {
    const Req = new ClientRequest_1.default(process.env.ClientHost, process.env.ClientKey);
    return Req.request('getPermissions', 'GET', null, 'attributes', `/api/client/permissions`, false);
}
exports.default = getPermissions;
