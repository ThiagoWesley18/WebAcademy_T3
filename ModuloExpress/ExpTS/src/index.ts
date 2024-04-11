import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/envalid";
import logger from "./middleware/logger";
import router from "./router/router";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";


/*
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // cria um arquivo .env.development ou .env.production 
//e alteramos package.json para "start": "NODE_ENV=development npx nodemon src/index.ts" e "start:prod": "NODE_ENV=production node src/index.ts"
*/

dotenv.config();                                                // informamos se é developement ou production no arquivo .env

validateEnv();                                                  // valida se as variáveis de ambiente estão definidas

const PORT = process.env.PORT;
const app = express();


app.engine("handlebars", engine({                               // configuramos o handlebars
    helpers: require(`${__dirname}/views/helpers/helpers`),     // para as funções helpers que serão usadas nas views
    layoutsDir: `src/views/layouts`,                            // onde estão os layouts comuns a todas as páginas
    defaultLayout: "main",                                      // layout padrão para onde irão as views personalizadas do diretório views/main
  }),
);
app.set("view engine", "handlebars");                           // setamos o view engine para handlebars
app.set("views", `${__dirname}/../src/views`);                  // setamos o diretório onde estão as views personalizadas

app.use(logger("completo"));                                    // criamos nosso middleware logger definido em src/middleware/logger.ts


app.use(sass({
    src: `${__dirname}/../public/scss`,                         // onde estão os arquivos scss
    dest: `${__dirname}/../public/css`,                         // onde serão gerados os arquivos css
    outputStyle: "compressed",                                  // estilo de saída
    prefix: "/css"                                              // prefixo para o arquivo css
}));


app.use("/html", express.static(`${__dirname}/../public/`));    // como passar um pagina html estática para o cliente (Assets)
app.use("/css", express.static(`${__dirname}/../public/css`));  // passar o arquivo css estático usado no layout padrão da view/main (Assets)
app.use('/js', [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
  ]);

app.use(express.json());                                         // middleware para tratar os dados enviados pelo body formulário
app.use(express.urlencoded({ extended: true }));                // middleware para tratar os dados enviados pelo body formulário

app.use(router);

app.listen(PORT, () => {
  console.log(`Aplicação na porta ${PORT}`);
});
//
