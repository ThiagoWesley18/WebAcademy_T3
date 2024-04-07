import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
 cleanEnv(process.env, { // registrará uma mensagem de erro no Node ou lançará no navegador se alguma variavel .env estiver ausente ou inválida.
 NODE_ENV: str(),
 PORT: port(),
 });
};
export default validateEnv;

/*
O process.env armazena apenas strings, mas às vezes você deseja recuperar outros tipos (booleanos, números) ou validar se uma variavel .env está em um formato específico (JSON, URL, endereço de e-mail). Para estes fins, estão disponíveis as seguintes funções de validação:

str() - Passa valores de string, garantindo que um valor esteja presente, a menos que um valor default seja fornecido. Observe que uma string vazia é considerada um valor válido - se isso for indesejável, você pode facilmente criar seu próprio validador (veja abaixo)
bool() - Analisa strings env var "1", "0", "true", "false", "t", "f" em booleanos
num() - Analisa um env var (por exemplo "42", "0.23", "1e5") em um número
email() - Garante que uma variavel .env seja um endereço de e-mail
host() - Garante que uma variavel .env seja um nome de domínio ou um endereço IP (v4 ou v6)
port() - Garante que uma variavel .env seja uma porta TCP (1-65535)
url() - Garante que uma variavel .env seja uma URL com protocolo e nome de host
json() - Analisa um env var com JSON.parse

Cada função de validação aceita um objeto (opcional) com os seguintes atributos:

choices - Uma matriz que lista os valores analisados admissíveis para uma variavel .env.
default - Um valor de fallback, que estará presente na saída uma variavel .env não tiver sido especificado. Fornecer um padrão efetivamente torna a variavel .env opcional. Observe que default os valores não são passados pela lógica de validação, eles são valores de saída padrão.
devDefault - Um valor de fallback a ser usado somente quando NODE_ENV estiver explicitamente definido e não 'production'. Isso é útil para variáveis de ambiente necessárias para ambientes de produção, mas opcionais para desenvolvimento e teste.
desc - Uma string que descreve a variavel .env
example - Um valor de exemplo para a variavel .env
docs - Uma URL que leva a uma documentação mais detalhada sobre a variavel .env
*/