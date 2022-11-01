import { Request, Response } from "express";
import { CreateConsultaService } from "../services/CreateConsultaService";

class CreateConsultaController {
  async execute(req: Request, res: Response) {
    const { description, paciente_id } = req.body;


    const createConsultaService = new CreateConsultaService()

    const consulta = await createConsultaService.execute({
      description,
      paciente_id,
    })

    return res.json(consulta)

  }
}

export { CreateConsultaController }