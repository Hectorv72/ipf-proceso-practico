import { Router } from 'express';
const routes = Router();

// controllers
import { clearAllCareers, createCareer, deleteCareer, factoryCareers, findCareers, updateCareer } from '../controllers/career.controllers.js';

// middlewares
import { requiredCareerFormat, verifyCareerFormat } from '../middlewares/career.middlewares.js';
import { verifyFactoryVol } from '../middlewares/general.middlewares.js';

routes.get('/', findCareers);
routes.post('/', [requiredCareerFormat, verifyCareerFormat], createCareer);
routes.post('/factory', verifyFactoryVol, factoryCareers)
routes.put('/', [verifyCareerFormat], updateCareer);
routes.delete('/', deleteCareer);
routes.delete('/all', clearAllCareers);

export default routes;