"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {Number} nodeId The node ID to delete
 */
async function deleteNode(nodeId) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('deleteNode', 'DELETE', null, 'delNode', `/api/application/nodes/${nodeId}`, false);
}
exports.default = deleteNode;
