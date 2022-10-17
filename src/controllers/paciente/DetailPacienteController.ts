import { Request, Response } from 'express'
import { DetailPacientService } from '../../services/paciente/DetailPacienteService';

class DetailPacientController {
  async handle(req: Request, res: Response) {
    const paciente_id = req.query.paciente_id as string;
    console.log(paciente_id)

    const detailPacientService = new DetailPacientService()

    const pacientDetail = await detailPacientService.execute({
      paciente_id: paciente_id
    })
    return res.json(pacientDetail)
  }

}

export { DetailPacientController }