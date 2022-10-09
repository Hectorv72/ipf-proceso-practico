import { Router } from 'express';
import { createPost, deletePost, findPosts, updatePost } from '../controllers/post.controllers.js';
import { requiredPostFormat, verifyPostFormat } from '../middlewares/post.middlewares.js';
const routes = Router();

routes.get('/', findPosts);
routes.post('/', [requiredPostFormat, verifyPostFormat], createPost);
routes.put('/', [verifyPostFormat], updatePost);
routes.delete('/', deletePost);

export default routes;