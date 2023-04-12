import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes/index.routes';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

export default app;
