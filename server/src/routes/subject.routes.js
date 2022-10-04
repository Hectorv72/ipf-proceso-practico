import { Router } from 'express';
import { createSubject, deleteSubject, findSubjects, updateSubject } from '../controllers/subject.controllers.js';
import { requiredSubjectFormat, verifySubjectFormat } from '../middlewares/subject.middlewares.js';
const routes = Router();

routes.get('/', findSubjects);
routes.post('/', [requiredSubjectFormat, verifySubjectFormat], createSubject);
routes.put('/', [verifySubjectFormat], updateSubject);
routes.delete('/', deleteSubject);

export default routes;