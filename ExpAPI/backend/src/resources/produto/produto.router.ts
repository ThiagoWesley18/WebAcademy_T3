import { Router } from "express";
import produtoController from "./produto.controller";
import validateBody from "../../middlewares/validateBody";
import schema from './produto.schemes';

const router = Router();

router.get("/", produtoController.index);
router.post("/", validateBody(schema) ,produtoController.create);
router.get("/:id", produtoController.read);
router.put("/:id", validateBody(schema) ,produtoController.update);
router.delete("/:id", produtoController.remove);

export default router;
