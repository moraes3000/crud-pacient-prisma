

import { Router } from 'express';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { CreatePacienteController } from '../controllers/CreatePacienteController';
import { DetailPacientController } from '../controllers/DetailPacienteController';
import { ListPacientesController } from '../controllers/ListPacienteController';
import { RemovePacienteController } from '../controllers/RemovePacienteController';
import { EditPacienteController } from '../controllers/UpdatePacienteController';

const pacientesController = Router();

const listController = new ListPacientesController();
const createController = new CreatePacienteController();
const detailController = new DetailPacientController();
const updateController = new EditPacienteController();
const removeController = new RemovePacienteController();


pacientesController.get('/', isAuthenticated, listController.execute);
pacientesController.post('/create', isAuthenticated, createController.execute);
pacientesController.get('/:id', isAuthenticated, detailController.execute);
pacientesController.put('/:id', isAuthenticated, updateController.execute);
pacientesController.delete('/:id', isAuthenticated, removeController.execute);

export default pacientesController;