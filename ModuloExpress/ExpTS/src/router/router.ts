import { Router } from 'express';
import { gerarTextoLoremIpisum } from './../utils/loremText';

gerarTextoLoremIpisum(3);

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/hb1', (req, res) => {
    res.render('hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
        layout: false,
    });
});

router.get('/hb2', (req, res) => {
    res.render('hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
    });
});

router.get('/hb3', (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('hb3', { profes, layout: false });
});

router.get('/hb4', (req, res) =>{
    const tecnologias = [
        { nome: 'Express', type: 'Framework', poweredByNodejs: true },
        { nome: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { nome: 'React', type: 'Library', poweredByNodejs: true },
        { nome: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { nome: 'Django', type: 'Framework', poweredByNodejs: false },
        { nome: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { nome: 'Sequelize', type: 'ORM tool', poweredByNodejs: true }
       ];
    res.render('hb4', { tecnologias, layout: false });
});

router.get('/lorem/:paragrafos', (req, res)  => {
    const { paragrafos } = req.params;
    const numParagrafos = Number(paragrafos); 
    res.send(gerarTextoLoremIpisum(numParagrafos));
});

export default router;