
import fs from 'fs';
import http from "http";
import {createLink , voltar} from './utils.js';
import dotenv from "dotenv";

/* configura process.env para receber os valores de configurações do arquivo que é apontado pela variavel 
ambiente NODE_ENV*/
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const PORT = process.env.PORT;

// cria o servidor
const server = http.createServer((req, res) => {

    if(req.url === '/'){
        // lê o diretório passado como argumento através do process.argv[2] - primeiro argumento
        fs.readdir(process.argv[2], (err, files) => {
            if (err) {
                console.error('Ocorreu um erro ao ler o diretório:', err);
                return;
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                files.forEach(file => {
                    res.write(createLink(`${file}`));
                });
            }
            res.end();
        });  
    }else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        fs.readFile(`./${req.url}`, (err, data) => {
            if (err) {
                console.error('Ocorreu um erro ao ler o arquivo:', err);
                return;
            }else{ 
                res.write(voltar() +"<br>" + data);
            }
            res.end();
        });
    }  
});

// inicia o servidor na PORT definida
server.listen(PORT);



