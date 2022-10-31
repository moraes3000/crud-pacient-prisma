import { Request, Response } from 'express'
import { RemoveUserService } from '../services/RemoveUserService';

class RemoveUserController {
  async handle(req: Request, res: Response) {
    const item_id = req.params.id

    const removeConsultaService = new RemoveUserService()

    const removePaciente = await removeConsultaService.execute({ item_id })

    res.json(removePaciente)
  }
}

export { RemoveUserController }

