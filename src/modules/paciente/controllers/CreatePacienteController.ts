import { Request, Response } from 'express'
import { CreatePacienteService } from '../services/CreatePacienteService'



class CreatePacienteController {
  async execute(req: Request, res: Response) {
    const { name } = req.body

    const createPacienteService = new CreatePacienteService()

    const paciente = await createPacienteService.execute({
      name
    })


    return res.json(paciente)
  }
}

export { CreatePacienteController }