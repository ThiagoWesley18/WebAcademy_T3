import express from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import router from './router';

dotenv.config();
validateEnv();
const app = express();

const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use('/', router);