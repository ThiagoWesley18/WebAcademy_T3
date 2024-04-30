import {cleanEnv, port, str} from 'envalid';
import { DEFAULT_CIPHERS } from 'tls';

export const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    DEFAULT_LANG: str({choices: ['pt-BR', 'en-US']}),
  });
};

export default validateEnv;