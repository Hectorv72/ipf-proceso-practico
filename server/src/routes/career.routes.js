import { Router } from 'express';
import { createCareer, deleteCareer, findCareers, updateCareer } from '../controllers/career.controllers.js';
import { requiredCareerFormat, verifyCareerFormat } from '../middlewares/career.middlewares.js';
const routes = Router();

routes.get('/', findCareers);
routes.post('/', [requiredCareerFormat, verifyCareerFormat], createCareer);
routes.put('/', [verifyCareerFormat], updateCareer);
routes.delete('/', deleteCareer);

export default routes;