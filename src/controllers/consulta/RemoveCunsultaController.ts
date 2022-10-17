import { RemoveConsultaService } from "../../services/consulta/RemoveConsultaService";

import { Request, Response } from 'express'

class RemoveConsultaController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const removeConsultaService = new RemoveConsultaService()

    const consulta = await removeConsultaService.execute({ item_id });

    res.json(consulta)

  }

}

export { RemoveConsultaController }