"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // importamos o Router
const main_1 = require("./../controllers/main"); // importamos os controllers
// Definimos as rotas
const router = (0, express_1.Router)();
router.get("/", main_1.hello);
router.get("/hb1", main_1.hb1);
router.get("/hb2", main_1.hb2);
router.get("/hb3", main_1.hb3);
router.get("/hb4", main_1.hb4);
router.get("/lorem/:paragrafos", main_1.lorem);
exports.default = router;
