import { Router } from 'express';
import { createClass, deleteClass, findClasses, updateClass } from '../controllers/class.controllers.js';
import { requiredClassFormat, verifyClassFormat } from '../middlewares/class.middlewares.js';
const routes = Router();

routes.get('/', findClasses);
routes.post('/', [requiredClassFormat, verifyClassFormat], createClass);
routes.put('/', [verifyClassFormat], updateClass);
routes.delete('/', deleteClass);

export default routes;