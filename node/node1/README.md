# Projeto Servidor HTTP Node.js

Este projeto é um servidor HTTP simples criado usando Node.js. Ele lê o conteúdo de um diretório especificado e retorna uma lista de links para os arquivos nesse diretório.

## Funcionalidades

- Lê o conteúdo de um diretório especificado como argumento na linha de comando.
- Retorna uma lista de links HTML para os arquivos no diretório.
- Usa variáveis de ambiente para configuração (por exemplo, a porta na qual o servidor deve escutar).

## Como usar

1. Instale as dependências do projeto com `npm install`.
2. Inicie o servidor com `node main.js <diretório>`, substituindo `<diretório>` pelo caminho do diretório que você deseja listar. Ou mude o atributo "start" no arquivo package.json substituindo `./arquivos/` pelo `<diretório>` e inicie com `npm start`.
3. Abra um navegador e vá para `http://localhost:<PORTA>`, substituindo `<PORTA>` pela porta na qual o servidor está escutando.

## Dependências

- Node.js
- dotenv: para carregar variáveis de ambiente.

