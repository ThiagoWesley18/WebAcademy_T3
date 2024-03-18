
const createLink = (file) => `<a href="../arquivos/${file}">${file}</a><br>`; // para importar temos utilizar o mesmo nome entre chaves que foi exportado

const voltar = () => `<a href="/">Voltar</a><br>`; // para importar temos utilizar o mesmo nome entre chaves que foi exportado

module.exports = {createLink, voltar}; // exportando as funções para serem utilizadas em outros arquivos
