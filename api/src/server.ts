import 'dotenv/config';

import express from 'express';
import path from 'node:path';
import cors from 'cors';

import conectOnDatabase from './config/dbConnect';
import NotFoundHandler from './middlewares/NotFoundHandler';
import ErrorHandlers from './middlewares/ErrorHandlers';

import routes from './routes';

conectOnDatabase();

const PORT = 3001;
const app = express();

app.use(cors());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());

routes(app);

app.use(NotFoundHandler);
app.use(ErrorHandlers);

app.listen(PORT, () => console.log('Server is running! 🔥'));
