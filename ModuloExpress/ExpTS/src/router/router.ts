import { Router } from 'express';
import { gerarTextoLoremIpisum } from './../utils/loremText';

gerarTextoLoremIpisum(3);

const router = Router();

router.get('/', (req, res, next) => {
    res.send('Hello World');
    next();
});

router.get('/lorem/:paragrafos', (req, res)  => {
    const { paragrafos } = req.params;
    const numParagrafos = Number(paragrafos); 
    res.send(gerarTextoLoremIpisum(numParagrafos));
});

export default router;