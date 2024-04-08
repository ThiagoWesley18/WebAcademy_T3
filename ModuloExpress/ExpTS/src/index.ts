import express  from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/envalid';
import logger from './middleware/logger';
import  router  from './router/router';
import { engine } from 'express-handlebars';

/*
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // cria um arquivo .env.development ou .env.production 
//e alteramos package.json para "start": "NODE_ENV=development npx nodemon src/index.ts" e "start:prod": "NODE_ENV=production node src/index.ts"
*/
dotenv.config(); // informamos se é developement ou production no arquivo .env

validateEnv(); // valida se as variáveis de ambiente estão definidas

const PORT = process.env.PORT;
const app = express();

// configuramos o handlebars
app.engine("handlebars",  engine({
    helpers: require(`${__dirname}/views/helpers/helpers`)
   }));
app.set("view engine", "handlebars");
app.set("views", './src/views');





// criamos nosso middleware logger
app.use(logger("completo"));

// como passar um pagina html estática para o cliente
app.use("/html", express.static(`${__dirname}/../public/`));
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/js", express.static(`${__dirname}/../public/js`));


app.use(router);

app.listen(PORT, () => {
    console.log(`Aplicação na porta ${PORT}`);
});


