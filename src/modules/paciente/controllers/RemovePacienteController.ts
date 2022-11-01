import { Request, Response } from 'express'
import { RemovePacienteService } from '../services/RemovePacienteService';



class RemovePacienteController {
  async execute(req: Request, res: Response) {
    const item_id = req.params.id

    const removeConsultaService = new RemovePacienteService()

    const removePaciente = await removeConsultaService.execute({ item_id })

    res.json(removePaciente)
  }
}

export { RemovePacienteController }

