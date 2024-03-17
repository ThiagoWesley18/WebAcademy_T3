
const fs = require('fs');
const http = require('http');

const server = http.createServer((_, res) => {
    
    fs.readdir(process.argv[2], (err, files) => {
        if (err) {
            console.error('Ocorreu um erro ao ler o diretório:', err);
            return;
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            files.forEach(file => {
                res.write(`${file}<br>`);
                console.log(file);
            });
        }
        res.end();
    });  
});

server.listen(5000);



