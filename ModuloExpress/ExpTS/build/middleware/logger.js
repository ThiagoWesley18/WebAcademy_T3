"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const salvelogger = (filename, logs) => __awaiter(void 0, void 0, void 0, function* () {
    const logPath = process.env.FOLDER_LOGS;
    try {
        yield promises_1.default.access(logPath);
    }
    catch (error) {
        yield promises_1.default.mkdir(logPath);
    }
    try {
        yield promises_1.default.appendFile(`${logPath}/${filename}.log`, logs);
    }
    catch (error) {
        if (error)
            throw new Error(error.toString());
    }
});
const logger = (formato) => {
    if (formato === "simples") {
        return (req, Res, next) => __awaiter(void 0, void 0, void 0, function* () {
            const logs = ` ${new Date().toISOString()} - ${req.url} - ${req.method}\n`;
            yield salvelogger(`${formato}`, logs);
            next();
        });
    }
    else if (formato === "completo") {
        return (req, Res, next) => __awaiter(void 0, void 0, void 0, function* () {
            const logs = ` ${new Date().toISOString()} - ${req.method}  - ${req.url} - ${req.httpVersion} - ${req.get("User-Agent")}\n`;
            yield salvelogger(`${formato}`, logs);
            next();
        });
    }
    else {
        return (req, Res, next) => {
            console.log("Formato de log não suportado");
            next();
        };
    }
};
exports.default = logger;
/*
– fs.access(): verifica se o arquivo existe
– fs.chmod(): muda as permissos de acesso do arquivo
– fs.close(): fecha um descritor de arquivo
– fs.copyFile(): copia um arquivo
– fs.mkdir(): cria um novo diretório
– fs.open(): abre um arquivo para leitura
– fs.readdir(): lê o conteúdo de um diretório
– fs.readFile(): lê o conteúdo de um arquivo
– fs.symlink(): cria um link simbólico
– fs.unlink(): apaga um arquivo ou link
– fs.writeFile(): escreve dados em um arquivo
*/
