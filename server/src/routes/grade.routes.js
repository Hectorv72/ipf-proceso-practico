import { Router } from 'express';
import { createGrade, deleteGrade, findGrades, updateGrade } from '../controllers/grade.controllers.js';
import { requiredGradeFormat, verifyGradeFormat } from '../middlewares/grade.middlewares.js';
const routes = Router();

routes.get('/', findGrades);
routes.post('/', [requiredGradeFormat, verifyGradeFormat], createGrade);
routes.put('/', [verifyGradeFormat], updateGrade);
routes.delete('/', deleteGrade);

export default routes;