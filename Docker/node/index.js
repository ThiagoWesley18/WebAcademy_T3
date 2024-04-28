const http = require("http");

const servidor = http.createServer((req, res) => {
    res.end("<h1>Use Docker. Gostoso demais.</h1>");
});

servidor.listen(
    3000,
    () => console.log("SERVIDOR RODANDO VIOLENTAMENTE NA PORTA 3000.")
);
