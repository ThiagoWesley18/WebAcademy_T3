import joi from 'joi';

const produtoSchema = joi.object().keys({
    nome: joi.string().required(),
    preco: joi.number().required(),
    estoque: joi.number().required(),
    });

const produto = {
    nome: 'Produto 1',
    preco: 10,
    estoque: 100,
};

const result = produtoSchema.validate(produto);

export default produtoSchema;