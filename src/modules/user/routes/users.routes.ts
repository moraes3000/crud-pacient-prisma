import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateUserController } from '../controllers/CreateUserController';
import { DetailUserController } from '../controllers/DetailUserController';
import { ListUserController } from '../controllers/ListUserController';
import { UpdateUserController } from '../controllers/UpdateUserController';

const usersRouter = Router();
const usersController = new CreateUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();

usersRouter.get('/', listUserController.handle);
usersRouter.post('/', usersController.handle);
usersRouter.post('/session', authUserController.handle);
usersRouter.get('/me', detailUserController.handle);
usersRouter.put('/', updateUserController.handle);

export default usersRouter;