"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
/**
 * @param {String} username Users username
 * @param {String} email Users email
 * @param {String} firstName Users first name
 * @param {String} lastName Users last name
 * @param {Boolean} isAdmin Is the user admin? (true/false)
 * @param {String} language Language, Normally en/fr (2 letter languages)
 * @param {String} [password] Users password
 */
async function createUser(username, email, firstName, lastName, isAdmin, language = 'en', password) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    const data = createData(username, email, firstName, lastName, isAdmin, language);
    if (password)
        data.password = password;
    return Req.request('createUser', 'POST', data, 'attributes', '/api/application/users', true);
}
exports.default = createUser;
function createData(username, email, firstName, lastName, isAdmin, language) {
    return {
        email: email,
        username: username,
        first_name: firstName,
        last_name: lastName,
        root_admin: isAdmin,
        language: language,
    };
}
