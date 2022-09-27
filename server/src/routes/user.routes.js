import { Router } from 'express';
import { createUser, deleteUser, findUsers, removeUser, updateUser } from '../controllers/user.controllers.js';
const routes = Router();

routes.get('/', findUsers);
routes.post('/', createUser);
routes.put('/', updateUser);
routes.put('/delete', deleteUser);
routes.delete('/', removeUser);

export default routes;