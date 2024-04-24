"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduto = exports.updateProduto = exports.readProduto = exports.listprodutos = exports.createProduto = exports.jaExiste = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const jaExiste = async (nome, ignoreId) => {
    const produto = await prisma.produto.findUnique({ where: { nome } });
    if (!produto) {
        return true;
    }
    if (ignoreId && produto.id === ignoreId) {
        return true;
    }
    return false;
};
exports.jaExiste = jaExiste;
const createProduto = async (produto) => {
    return await prisma.produto.create({ data: produto });
};
exports.createProduto = createProduto;
const listprodutos = async () => {
    return await prisma.produto.findMany();
};
exports.listprodutos = listprodutos;
const readProduto = async (id) => {
    return await prisma.produto.findUnique({ where: { id } });
};
exports.readProduto = readProduto;
const updateProduto = async (id, produto) => {
    return await prisma.produto.update({ where: { id }, data: produto });
};
exports.updateProduto = updateProduto;
const deleteProduto = async (id) => {
    return await prisma.produto.delete({ where: { id } });
};
exports.deleteProduto = deleteProduto;
