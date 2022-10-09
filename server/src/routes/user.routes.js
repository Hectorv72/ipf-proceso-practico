import { Router } from 'express';
import { clearAllUsers, createUser, deleteUser, factoryUsers, findUsers, removeUser, updateUser } from '../controllers/user.controllers.js';
import { requiredUserFormat, verifyFactoryVol, verifyUserFormat } from '../middlewares/user.middlewares.js';
const routes = Router();

routes.get('/', findUsers);
routes.post('/', [requiredUserFormat, verifyUserFormat], createUser);
routes.post('/factory', verifyFactoryVol, factoryUsers)
routes.put('/', [verifyUserFormat], updateUser);
routes.put('/delete', deleteUser);
routes.delete('/', removeUser);
routes.delete('/all', clearAllUsers);

export default routes;