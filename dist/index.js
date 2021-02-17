"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.App = void 0;
const index_1 = __importDefault(require("./application/index"));
exports.App = index_1.default;
const index_2 = __importDefault(require("./client/index"));
exports.Client = index_2.default;
exports.default = {
    Application: index_1.default,
    Client: index_2.default,
};
