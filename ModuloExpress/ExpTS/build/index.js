"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const envalid_1 = __importDefault(require("./utils/envalid"));
const logger_1 = __importDefault(require("./middleware/logger"));
const router_1 = __importDefault(require("./router/router"));
const express_handlebars_1 = require("express-handlebars");
const node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
/*
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // cria um arquivo .env.development ou .env.production
//e alteramos package.json para "start": "NODE_ENV=development npx nodemon src/index.ts" e "start:prod": "NODE_ENV=production node src/index.ts"
*/
dotenv_1.default.config(); // informamos se é developement ou production no arquivo .env
(0, envalid_1.default)(); // valida se as variáveis de ambiente estão definidas
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.engine(// configuramos o handlebars
"handlebars", (0, express_handlebars_1.engine)({
    helpers: require(`${__dirname}/views/helpers/helpers`), // para as funções helpers que serão usadas nas views
    layoutsDir: `src/views/layouts`, // onde estão os layouts comuns a todas as páginas
    defaultLayout: "main", // layout padrão para onde irão as views personalizadas do diretório views/main
}));
app.set("view engine", "handlebars"); // setamos o view engine para handlebars
app.set("views", `${__dirname}/../src/views/main`); // setamos o diretório onde estão as views
app.use((0, logger_1.default)("completo")); // criamos nosso middleware logger definido em src/middleware/logger.ts
app.use((0, node_sass_middleware_1.default)({
    src: `${__dirname}/../public/scss`, // onde estão os arquivos scss
    dest: `${__dirname}/../public/css`, // onde serão gerados os arquivos css
    outputStyle: "compressed", // estilo de saída
    prefix: "/css" // prefixo para o arquivo css
}));
app.use("/html", express_1.default.static(`${__dirname}/../public/`)); // como passar um pagina html estática para o cliente (Assets)
app.use("/css", express_1.default.static(`${__dirname}/../public/css`)); // passar o arquivo css estático usado no layout padrão da view/main (Assets)
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Aplicação na porta ${PORT}`);
});
//
