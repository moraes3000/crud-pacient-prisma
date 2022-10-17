import { Request, Response } from "express";
import { ListPacientesService } from "../../services/paciente/ListPacienteService";

class ListPacientesController {
  async handle(req: Request, res: Response) {
    const listarPacientesService = new ListPacientesService()

    const pacientes = await listarPacientesService.execute()


    return res.json(pacientes)
  }
}

export { ListPacientesController }