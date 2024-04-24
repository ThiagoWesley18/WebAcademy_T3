"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto_service_1 = require("./produto.service");
const index = async (req, res) => {
    try {
        const produtos = await (0, produto_service_1.listprodutos)();
        res.status(200).json(produtos);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
const create = async (req, res) => {
    const produto = req.body;
    try {
        if (await (0, produto_service_1.jaExiste)(produto.nome)) {
            const newProduto = await (0, produto_service_1.createProduto)(produto);
            res.status(200).json(newProduto);
        }
        else {
            res.status(400).json({ msg: 'Produto já existe' });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
const read = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await (0, produto_service_1.readProduto)(id);
        if (!produto) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
const update = async (req, res) => {
    const { id } = req.params;
    const produto = req.body;
    try {
        if (await (0, produto_service_1.jaExiste)(produto.nome, id)) {
            const updatedProduto = await (0, produto_service_1.updateProduto)(id, produto);
            res.status(204).json(updatedProduto);
        }
        else {
            res.status(400).json({ msg: 'Produto já existe' });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await (0, produto_service_1.deleteProduto)(id);
        res.status(200).json(produto);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.default = { index, create, read, update, remove };
