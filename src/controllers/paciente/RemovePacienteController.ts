import { Request, Response } from 'express'


import { RemovePacienteService } from "../../services/paciente/RemovePacienteService"

class RemovePacienteController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const removeConsultaService = new RemovePacienteService()

    const removePaciente = await removeConsultaService.execute({ item_id })

    res.json(removePaciente)
  }
}

export { RemovePacienteController }

