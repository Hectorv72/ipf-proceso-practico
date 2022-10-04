import { Router } from 'express';
import { createAbsence, deleteAbsence, findAbsences, updateAbsence } from '../controllers/absence.controllers.js';
import { requiredAbsenceFormat, verifyAbsenceFormat } from '../middlewares/absence.middlewares.js';
const routes = Router();

routes.get('/', findAbsences);
routes.post('/', [requiredAbsenceFormat, verifyAbsenceFormat], createAbsence);
routes.put('/', [verifyAbsenceFormat], updateAbsence);
routes.delete('/', deleteAbsence);

export default routes;