"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const envalid_1 = require("envalid");
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        PORT: (0, envalid_1.port)(),
        NODE_ENV: (0, envalid_1.str)(),
        DEFAULT_LANG: (0, envalid_1.str)({ choices: ['pt-BR', 'en-US'] }),
    });
};
exports.validateEnv = validateEnv;
exports.default = exports.validateEnv;
