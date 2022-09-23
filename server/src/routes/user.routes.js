import { Router } from 'express';
import { createUser, findUsers } from '../controllers/user.controllers';
const routes = Router();

routes.get('/', findUsers);
routes.post('/', createUser);

export default routes;