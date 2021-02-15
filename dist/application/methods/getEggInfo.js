"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
async function getEggInfo(nestID, eggId) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('getNodeInfo', 'GET', null, 'attributes', `/api/application/nests/${nestID}/eggs/${eggId}`, false);
}
exports.default = getEggInfo;
