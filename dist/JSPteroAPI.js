"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const index_1 = __importDefault(require("./application/index"));
const index_2 = __importDefault(require("./client/index"));
module.exports = {
    Application: index_1.default,
    Client: index_2.default,
};
