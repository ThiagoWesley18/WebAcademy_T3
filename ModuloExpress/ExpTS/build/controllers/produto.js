"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${process.env.URL_DB}/produtos`);
        const produtos = yield response.json();
        res.render('produto/index', { produtos, layout: "main" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao buscar os produtos');
    }
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.URL_DB}/produtos/${req.params.id}`);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === "GET") {
        res.render('produto/create', { layout: "main" });
    }
    else if (req.method === "POST") {
        const produto = req.body;
        try {
            yield fetch(`${process.env.URL_DB}/produtos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
            res.redirect('/produto');
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Ocorreu um erro ao criar o produto');
        }
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.default = { index, read, create, update, remove };
