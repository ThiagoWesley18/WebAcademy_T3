"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loremText_1 = require("./../utils/loremText");
(0, loremText_1.gerarTextoLoremIpisum)(3);
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.send('Hello World');
    next();
});
router.get('/lorem/:paragrafos', (req, res) => {
    const { paragrafos } = req.params;
    const numParagrafos = Number(paragrafos);
    res.send((0, loremText_1.gerarTextoLoremIpisum)(numParagrafos));
});
exports.default = router;
