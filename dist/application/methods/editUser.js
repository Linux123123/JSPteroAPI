"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRequest_1 = __importDefault(require("../ApplicationRequest"));
const getUserInfo_1 = __importDefault(require("./getUserInfo"));
/**
 * @param {Number} userId External UserId
 * @param {String} [username] New username or undefined to skip
 * @param {String} [password] New password or undefined to skip
 * @param {String} [email] New email or undefined to skip
 * @param {String} [firstName] New first name or undefined to skip
 * @param {String} [lastName] New last name or undefined to skip
 * @param {Boolean} [isAdmin] New admin boolean or undefined to skip
 * @param {String} [language] New language or undefined to skip
 */
async function editUser(userId, username, password, email, firstName, lastName, isAdmin, language) {
    const Req = new ApplicationRequest_1.default(process.env.AppHost, process.env.AppKey);
    const user = await getUserInfo_1.default(userId);
    if (!username)
        username = user.username;
    if (!password)
        password = undefined;
    if (!email)
        email = user.email;
    if (!firstName)
        firstName = user.first_name;
    if (!lastName)
        lastName = user.last_name;
    if (!isAdmin)
        isAdmin = user.root_admin;
    if (!language)
        language = user.language;
    const data = createData(username, password, email, firstName, lastName, isAdmin, language);
    return Req.request('editUser', 'PATCH', data, 'attributes', `/api/application/users/${userId}`, true);
}
exports.default = editUser;
function createData(username, password, email, firstName, lastName, isAdmin, language) {
    let data = {
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        root_admin: isAdmin,
        language: language,
    };
    if (password)
        data.password = password;
    return data;
}
