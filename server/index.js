import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { connectMongoDB } from './src/connections/mongodb.connection.js';
import userRoutes from './src/routes/user.routes.js';
import loginRoutes from './src/routes/login.routes.js';
import subjectRoutes from './src/routes/subject.routes.js';
import classroomRoutes from './src/routes/classroom.routes.js';
import absenceRoutes from './src/routes/absence.routes.js';

const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use('/auth', loginRoutes);
app.use('/user', userRoutes);
app.use('/class', classroomRoutes);
app.use('/subject', subjectRoutes);
app.use('/absence', absenceRoutes);

// runner
connectMongoDB();
app.listen(port, () =>
  console.log(`Servidor iniciado en el puerto: ${port}`)
);