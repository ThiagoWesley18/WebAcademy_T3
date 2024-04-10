import { Router } from "express"; // importamos o Router
import { hello, hb1, hb2, hb3, hb4, lorem } from "./../controllers/main"; // importamos os controllers
import produtoController from '../controllers/produto';

// Controlador Main
const router = Router();

router.get("/", hello);

router.get("/hb1", hb1);

router.get("/hb2", hb2);

router.get("/hb3", hb3);

router.get("/hb4", hb4);

router.get("/lorem/:paragrafos", lorem);

// Controlador Produto
router.get('/produto', produtoController.index);
router.get('/produto/create', produtoController.create);
router.post('/produto/create', produtoController.create);
router.get('/produto/update/:id', produtoController.update);
router.post('/produto/update/:id', produtoController.update);
router.get('/produto/:id', produtoController.read);
router.post('/produto/:id', produtoController.remove);

export default router;
