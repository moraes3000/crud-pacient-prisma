import { Request, Response } from "express";
import { CreateConsultaService } from "../../services/consulta/CreateConsultaService";

class CreateConsultaController {
  async handle(req: Request, res: Response) {
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