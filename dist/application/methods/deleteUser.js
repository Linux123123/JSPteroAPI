"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {Number} userId The user ID to delete
 */
async function deleteUser(userId) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('deleteUser', 'DELETE', null, 'delUser', `/api/application/users/${userId}`, false);
}
exports.default = deleteUser;
