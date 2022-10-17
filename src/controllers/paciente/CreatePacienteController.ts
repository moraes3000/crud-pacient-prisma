import { Request, Response } from 'express'
import { CreatePacienteService } from '../../services/paciente/CreatePacienteService'


class CreatePacienteController {
  async handler(req: Request, res: Response) {
    const { name } = req.body

    const createPacienteService = new CreatePacienteService()

    const paciente = await createPacienteService.execute({
      name
    })


    return res.json(paciente)
  }
}

export { CreatePacienteController }