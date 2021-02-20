"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeIncludes(options) {
    if (!options)
        return '';
    let include = '?include=';
    const optionsArray = Object.entries(options);
    if (optionsArray.some(([, value]) => value === true)) {
        optionsArray.forEach(([key, value]) => {
            if (value)
                include += `${key},`;
        });
        return include.slice(0, -1);
    }
    return '';
}
exports.default = makeIncludes;
