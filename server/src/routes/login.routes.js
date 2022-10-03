import { Router } from 'express';
import { signInUser, signUpUser } from '../controllers/login.controllers.js';
import { verifyUserExistence, verifyUserPassword } from '../middlewares/login.middlewares.js';
import { verifyUserFormat } from '../middlewares/user.middlewares.js';
import { RequiredSchema } from '../schemas/user.schema.js';
const routes = Router();

routes.post('/login', [verifyUserExistence, verifyUserPassword], signInUser);
routes.post('/register', [RequiredSchema, verifyUserFormat], signUpUser);

export default routes;