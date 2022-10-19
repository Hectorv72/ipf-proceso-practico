import { Router } from 'express';
const routes = Router();

// controllers
import { clearAllUsers, createUser, deleteUser, factoryUsers, findRandomUser, findUsers, removeUser, updateUser } from '../controllers/user.controllers.js';

// middlewares
import { verifyFactoryVol } from '../middlewares/general.middlewares.js';
import { requiredUserFormat, verifyUserFormat } from '../middlewares/user.middlewares.js';

routes.get('/', findUsers);
routes.get('/random', findRandomUser);
routes.post('/', [requiredUserFormat, verifyUserFormat], createUser);
routes.post('/factory', verifyFactoryVol, factoryUsers)
routes.put('/', [verifyUserFormat], updateUser);
routes.put('/delete', deleteUser);
routes.delete('/', removeUser);
routes.delete('/all', clearAllUsers);

export default routes;