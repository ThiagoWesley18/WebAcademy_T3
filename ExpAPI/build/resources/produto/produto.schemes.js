"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const produtoSchema = joi_1.default.object().keys({
    nome: joi_1.default.string().required(),
    preco: joi_1.default.number().required(),
    estoque: joi_1.default.number().required(),
});
const produto = {
    nome: 'Produto 1',
    preco: 10,
    estoque: 100,
};
const result = produtoSchema.validate(produto);
exports.default = produtoSchema;
