"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Application = void 0;
/**
 * The main entrypoint for the API
 * @module JSPteroAPI
 * @category Main
 */
const index_1 = require("./application/index");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return index_1.Application; } });
const index_2 = require("./client/index");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return index_2.Client; } });
exports.default = {
    Application: index_1.Application,
    Client: index_2.Client,
};
