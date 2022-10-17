import { Router, Request, Response } from 'express'
import multer from 'multer'
import { CreateConsultaController } from './controllers/consulta/CreateConsultaController';
import { RemoveConsultaController } from './controllers/consulta/RemoveCunsultaController';
import { CreatePacienteController } from './controllers/paciente/CreatePacienteController';
import { DetailPacientController } from './controllers/paciente/DetailPacienteController';
import { ListPacientesController } from './controllers/paciente/ListPacienteController';
import { RemovePacienteController } from './controllers/paciente/RemovePacienteController';
import { EditPacienteController } from './controllers/paciente/UpdatePacienteController';

import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();


//user
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', new DetailUserController().handle);

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