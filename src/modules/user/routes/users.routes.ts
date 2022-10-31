import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateUserController } from '../controllers/CreateUserController';
import { DetailUserController } from '../controllers/DetailUserController';

const usersRouter = Router();
const usersController = new CreateUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailUserController();

usersRouter.post('/', usersController.handle);
usersRouter.post('/session', authUserController.handle);
usersRouter.get('/me', detailUserController.handle);

export default usersRouter;