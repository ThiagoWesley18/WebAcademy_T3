import joi from 'joi';

const languageSchema = joi.object().keys({
    lang: joi.valid('pt-BR', 'en-US').required(),
});

export default languageSchema;