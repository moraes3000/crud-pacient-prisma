import { Router, Request, Response } from 'express'
import multer from 'multer'
import { CreateConsultaController } from './controllers/consulta/CreateConsultaController';
import { RemoveConsultaController } from './controllers/consulta/RemoveCunsultaController';
import { CreatePacienteController } from './controllers/paciente/CreatePacienteController';
import { DetailPacientController } from './controllers/paciente/DetailPacienteController';
import { ListPacientesController } from './controllers/paciente/ListPacienteController';
import { RemovePacienteController } from './controllers/paciente/RemovePacienteController';
import { EditPacienteController } from './controllers/paciente/UpdatePacienteController';



import { DetailUserController } from './modules/user/controllers/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import usersRouter from './modules/user/routes/users.routes';


const router = Router();


//user
// router.post('/users', new CreateUserController().handle);
router.use('/users', usersRouter);
// router.post('/session', new AuthUserController().handle);
// router.get('/me', new DetailUserController().handle);

// paciente
router.post('/pacientes', new CreatePacienteController().handler);
router.get('/pacientes', new ListPacientesController().handle);
router.get('/paciente', new DetailPacientController().handle);
router.delete('/paciente', new RemovePacienteController().handle);
router.put('/paciente', new EditPacienteController().handle);

// consulta
router.post('/consulta', new CreateConsultaController().handle);
router.delete('/consulta', new RemoveConsultaController().handle);


export { router }