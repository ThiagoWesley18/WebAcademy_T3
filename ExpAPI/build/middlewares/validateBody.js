"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false
        });
        if (error)
            res.status(422).json({ error: error.details });
        else
            next();
    };
};
exports.default = validateBody;
