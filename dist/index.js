"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSPteroAPIError = exports.Client = exports.Application = void 0;
/**
 * The main entrypoint for the API
 * @module JSPteroAPI
 * @category Main
 */
const index_1 = require("./application/index");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return index_1.Application; } });
const index_2 = require("./client/index");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return index_2.Client; } });
const Error_1 = require("./modules/Error");
Object.defineProperty(exports, "JSPteroAPIError", { enumerable: true, get: function () { return Error_1.JSPteroAPIError; } });
exports.default = {
    Application: index_1.Application,
    Client: index_2.Client,
};
