import { Router } from 'express';
const routes = Router();

// controllers
import { clearAllPosts, createPost, deletePost, factoryPosts, findPosts, updatePost } from '../controllers/post.controllers.js';

// middlewares
import { verifyFactoryVol } from '../middlewares/general.middlewares.js';
import { requiredPostFormat, verifyPostFormat } from '../middlewares/post.middlewares.js';

routes.get('/', findPosts);
routes.post('/', [requiredPostFormat, verifyPostFormat], createPost);
routes.post('/factory', verifyFactoryVol, factoryPosts)
routes.put('/', [verifyPostFormat], updatePost);
routes.delete('/', deletePost);
routes.delete('/all', clearAllPosts);




export default routes;