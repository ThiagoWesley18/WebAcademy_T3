import { Router } from "express";
import produtoRouter from "../resources/produto/produto.router";
import languageRouter from "../resources/language/language.router";
import authRouter from '../resources/auth/auth.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import compraRouter from '../resources/compra/compra.router';

const router = Router();

router.use("/produto",produtoRouter);
router.use("/language",languageRouter);
router.use("/auth",authRouter);
router.use("/usuario", usuarioRouter);
router.use("/compra", compraRouter);


export default router;