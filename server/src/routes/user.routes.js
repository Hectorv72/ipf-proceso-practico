import { Router } from 'express';
import { createUser, deleteUser, findUsers, removeUser, updateUser } from '../controllers/user.controllers.js';
import { requiredUserFormat, verifyUserFormat } from '../middlewares/user.middlewares.js';
const routes = Router();

routes.get('/', findUsers);
routes.post('/', [requiredUserFormat, verifyUserFormat], createUser);
routes.put('/', [verifyUserFormat], updateUser);
routes.put('/delete', deleteUser);
routes.delete('/', removeUser);

export default routes;