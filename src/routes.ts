import { Router, Request, Response } from 'express'
import multer from 'multer'

import usersRouter from './modules/user/routes/users.routes';
import pacientesController from './modules/paciente/routes/pacientes.routes';
import consultaRoutes from './modules/consulta/routes/consulta.routes';


const router = Router();



router.use('/users', usersRouter);
router.use('/pacientes', pacientesController);
router.use('/consulta', consultaRoutes);


export { router }