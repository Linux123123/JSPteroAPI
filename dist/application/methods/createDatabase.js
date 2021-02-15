"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {String} name Name of the Database
 * @param {Integer} hostDBID ID of the Database Host
 * @param {Integer} internalId InternalID of the Server to create the Database
 * @param {String} allowedIp IP allowed to connect, leave "%" if you dont want to restrict
 */
async function createDatabase(name, hostDBID, internalId, allowedIp = '%') {
    const data = makeData(name, allowedIp, hostDBID);
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    return Req.request('createDatabase', 'POST', data, 'attributes', `/api/application/servers/${internalId}/databases`, true);
}
exports.default = createDatabase;
function makeData(name, allowedIp, hostDBID) {
    return {
        database: name,
        remote: allowedIp,
        host: hostDBID,
    };
}
