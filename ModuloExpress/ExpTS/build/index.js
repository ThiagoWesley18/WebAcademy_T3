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
/*
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // cria um arquivo .env.development ou .env.production
//e alteramos package.json para "start": "NODE_ENV=development npx nodemon src/index.ts" e "start:prod": "NODE_ENV=production node src/index.ts"
*/
dotenv_1.default.config(); // informamos se é developement ou production no arquivo .env
(0, envalid_1.default)(); // valida se as variáveis de ambiente estão definidas
const PORT = process.env.PORT;
const app = (0, express_1.default)();
// configuramos o handlebars
app.engine("handlebars", (0, express_handlebars_1.engine)());
app.set("view engine", "handlebars");
app.set("views", `./views`);
// criamos nosso middleware logger
app.use((0, logger_1.default)("completo"));
// como passar um pagina html estática para o cliente
app.use("/html", express_1.default.static(`${__dirname}/../public/`));
app.use("/css", express_1.default.static(`${__dirname}/../public/css`));
app.use("/js", express_1.default.static(`${__dirname}/../public/js`));
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Aplicação na porta ${PORT}`);
});
