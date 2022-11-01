import { Request, Response } from "express";
import { ListPacientesService } from "../services/ListPacienteService";

class ListPacientesController {
  async execute(req: Request, res: Response) {
    const listarPacientesService = new ListPacientesService()

    const pacientes = await listarPacientesService.execute()


    return res.json(pacientes)
  }
}

export { ListPacientesController }