
import express  from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/envalid';
import logger from './middleware/logger';

/*
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // cria um arquivo .env.development ou .env.production 
//e alteramos package.json para "start": "NODE_ENV=development npx nodemon src/index.ts" e "start:prod": "NODE_ENV=production node src/index.ts"
*/
dotenv.config(); // informamos se é developement ou production no arquivo .env

validateEnv(); // valida se as variáveis de ambiente estão definidas

const PORT = process.env.PORT;
const app = express();

app.use(logger("completo"));

app.get('/', (req, res)  => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Aplicação na porta ${PORT}`);
});


