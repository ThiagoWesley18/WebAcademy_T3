import {cleanEnv, port, str} from 'envalid';

export const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str()
  });
};

export default validateEnv;