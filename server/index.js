import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectMongoDB } from './src/connections/mongodb.connection.js';
import userRoutes from './src/routes/user.routes.js';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use('/user', userRoutes);

// runner
connectMongoDB();
app.listen(port, () =>
  console.log(`Servidor iniciado en el puerto: ${port}`)
);