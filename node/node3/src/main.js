import { gerarTextoLoremIpisum, gerarHTMLAnterior, gerarHTMLPosterior} from "./utils.js";
import dotenv from "dotenv";
import http from "http";


dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const PORT = process.env.PORT;

let numParagrafo = "";
   
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/'){
        Promise.all([gerarHTMLAnterior(), gerarHTMLPosterior()]).then((values) => {
            res.write(values[0] +values[1]);
            res.end();
        });
    }else if (req.method === 'GET') {
        if( req.url != "/favicon.ico"){
            numParagrafo = req.url.split("=")[1];
            Promise.all([gerarHTMLAnterior(), gerarHTMLPosterior()]).then((values) => {
                res.write(values[0] + gerarTextoLoremIpisum(numParagrafo) + values[1]);
                res.end();
            });
        }
    } else {
        res.end('Página não encontrada.');
    }
}).listen(PORT);





