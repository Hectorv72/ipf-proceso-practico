import { Router } from 'express';
const routes = Router();

// controllers
import { clearAllSubjects, createSubject, deleteSubject, factorySubjects, findSubjects, getSubject, updateSubject } from '../controllers/subject.controllers.js';

// middlewares
import { verifyFactoryVol } from '../middlewares/general.middlewares.js';
import { requiredSubjectFormat, verifySubjectFormat } from '../middlewares/subject.middlewares.js';

routes.get('/', findSubjects);
routes.get('/:subjectId', getSubject);
routes.post('/', [requiredSubjectFormat, verifySubjectFormat], createSubject);
routes.post('/factory', verifyFactoryVol, factorySubjects)
routes.put('/', [verifySubjectFormat], updateSubject);
routes.delete('/', deleteSubject);
routes.delete('/all', clearAllSubjects);



export default routes;