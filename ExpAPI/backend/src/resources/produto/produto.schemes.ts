import joi from 'joi';

const produtoSchema = joi.object().keys({
    nome: joi.string().min(3).max(50).required(),
    preco: joi.number().required(),
    estoque: joi.number().positive().integer().required().messages({
       "number.positive": "O valor do estoque deve ser positivo, o  valor {#value} é inválido",
    }),
});

const produto = {
    nome: 'Produto 1',
    preco: 10,
    estoque: 100,
};

const result = produtoSchema.validate(produto);

export default produtoSchema;