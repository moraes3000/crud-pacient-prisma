import { Router } from 'express';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateUserController } from '../controllers/CreateUserController';
import { DetailUserController } from '../controllers/DetailUserController';
import { ListUserController } from '../controllers/ListUserController';
import { RemoveUserController } from '../controllers/RemoveUserController';
import { UpdateUserController } from '../controllers/UpdateUserController';

const usersRouter = Router();

const usersController = new CreateUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const removeUserController = new RemoveUserController();

usersRouter.get('/', isAuthenticated, listUserController.handle);
usersRouter.post('/', usersController.handle);
usersRouter.post('/session', isAuthenticated, authUserController.handle);
usersRouter.get('/me', isAuthenticated, detailUserController.handle);
usersRouter.put('/', isAuthenticated, updateUserController.handle);
usersRouter.delete('/:id', isAuthenticated, removeUserController.handle);

export default usersRouter;