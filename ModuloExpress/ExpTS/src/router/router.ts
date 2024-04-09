import { Router } from "express"; // importamos o Router
import { hello, hb1, hb2, hb3, hb4, lorem } from "./../controllers/main"; // importamos os controllers

// Definimos as rotas
const router = Router();

router.get("/", hello);

router.get("/hb1", hb1);

router.get("/hb2", hb2);

router.get("/hb3", hb3);

router.get("/hb4", hb4);

router.get("/lorem/:paragrafos", lorem);

export default router;
