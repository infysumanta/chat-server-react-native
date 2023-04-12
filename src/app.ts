import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(notFound);
app.use(errorHandler);

export default app;
