import { Router } from "express";
import isAuth from "../../middlewares/isAuth";
import compraController from "./compra.controller";

const router = Router();

router.get("/", isAuth, compraController.index);
router.post("/:id/:total", isAuth, compraController.adicionarProduto);
router.post("/", isAuth, compraController.compraProduto);

export default router;
