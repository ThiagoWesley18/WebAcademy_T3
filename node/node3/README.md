# Projeto Node.js Server

Este projeto é um servidor HTTP simples criado usando Node.js. Ele usa o módulo `http` para criar o servidor e o pacote `dotenv` para gerenciar variáveis de ambiente.

## Funcionalidades

O servidor tem duas rotas principais:

1. A rota raiz (`/`): Quando esta rota é acessada, o servidor responde com uma combinação de HTML gerado pelas funções `gerarHTMLAnterior()` e `gerarHTMLPosterior()`.

2. Qualquer outra rota GET (exceto `/favicon.ico`): Quando uma dessas rotas é acessada, o servidor responde com uma combinação de HTML gerado pelas funções `gerarHTMLAnterior()`, `gerarTextoLoremIpisum()` e `gerarHTMLPosterior()`. O número de parágrafos de texto Lorem Ipsum gerado é determinado pelo valor passado na URL (por exemplo, `/paragrafo=3` geraria 3 parágrafos).

Se uma rota não for encontrada, o servidor responderá com a mensagem 'Página não encontrada.'.

## Configuração

O servidor usa a variável de ambiente `PORT` para determinar em qual porta escutar. Esta variável de ambiente é definida no arquivo `.env`.

## Execução

1. Instale as dependências do projeto com `npm install`.
2. Para executar o servidor, use o comando `node main.js` no terminal ou `npm start`
3. Abra um navegador e vá para `http://localhost:<PORTA>`, substituindo `<PORTA>` pela porta na qual o servidor está escutando.