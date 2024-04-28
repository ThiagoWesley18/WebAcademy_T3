import joi from 'joi';

const languageSchema = joi.object().keys({
    lang: joi.valid('pt-BR', 'en-US').required().messages({
        "any.only": "O idioma deve ser 'pt-BR' ou 'en-US', o valor {#value} é inválido",
    }),
});

export default languageSchema;