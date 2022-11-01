import { Router } from 'express';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';

import { CreateConsultaController } from '../controllers/CreateConsultaController';
import { RemoveConsultaController } from '../controllers/RemoveCunsultaController';

const consultaRoutes = Router();

// const listController = new ListPacientesController();
const createController = new CreateConsultaController();
// const detailController = new DetailPacientController();
// const updateController = new EditPacienteController();
const removeController = new RemoveConsultaController();


// consultaRoutes.get('/', isAuthenticated, listController.execute);
consultaRoutes.post('/', isAuthenticated, createController.execute);
// consultaRoutes.get('/:id', isAuthenticated, detailController.execute);
// consultaRoutes.put('/:id', isAuthenticated, updateController.execute);
consultaRoutes.delete('/:id', isAuthenticated, removeController.execute);

export default consultaRoutes;