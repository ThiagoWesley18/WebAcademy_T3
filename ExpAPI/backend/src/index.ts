import express from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import router from './router';
import cookieParser from 'cookie-parser';
import setCookieLang from './middlewares/setLangCookie';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import { Carrinho } from './resources/compra/compra.types';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

declare module "express-session" {
  interface SessionData {
  uid: string;
  tipoUsuario: string
  carrinhoProdutos: Carrinho[];
  }
 }


dotenv.config();
validateEnv();
const app = express();

app.use(cookieParser());
app.use(session({
  genid: (req) => uuidv4(),
  secret: 'Hi9Cf#mK98',
  resave: true,
  saveUninitialized: true
 }));
 
app.use(setCookieLang);

const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use('/', router);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));