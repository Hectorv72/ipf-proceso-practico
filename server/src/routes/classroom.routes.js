import { Router } from 'express';
import { createClassroom, deleteClassroom, findClassrooms, updateClassroom } from '../controllers/classroom.controllers.js';
import { requiredClassroomFormat, verifyClassroomFormat } from '../middlewares/classroom.middlewares.js';
const routes = Router();

routes.get('/', findClassrooms);
routes.post('/', [requiredClassroomFormat, verifyClassroomFormat], createClassroom);
routes.put('/', [verifyClassroomFormat], updateClassroom);
routes.delete('/', deleteClassroom);

export default routes;