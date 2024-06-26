"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const languageSchema = joi_1.default.object().keys({
    lang: joi_1.default.valid('pt-BR', 'en-US').required().messages({
        "any.only": "O idioma deve ser 'pt-BR' ou 'en-US', o valor {#value} é inválido",
    }),
});
exports.default = languageSchema;
