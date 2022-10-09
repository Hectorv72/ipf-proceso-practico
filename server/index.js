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
import gradeRoutes from './src/routes/grade.routes.js';
import postRoutes from './src/routes/post.routes.js';

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
app.use('/classroom', classroomRoutes);
app.use('/subject', subjectRoutes);
app.use('/absence', absenceRoutes);
app.use('/grade', gradeRoutes);
app.use('/post', postRoutes);

// runner
connectMongoDB();
app.listen(port, () =>
  console.log(`Servidor iniciado en el puerto: ${port}`)
);