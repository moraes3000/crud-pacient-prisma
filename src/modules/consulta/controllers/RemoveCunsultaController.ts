
import { Request, Response } from 'express'

import { RemoveConsultaService } from '../services/RemoveConsultaService';

class RemoveConsultaController {
  async execute(req: Request, res: Response) {
    const item_id = req.params.id

    const removeConsultaService = new RemoveConsultaService()

    const consulta = await removeConsultaService.execute({ item_id });

    res.json(consulta)

  }

}

export { RemoveConsultaController }