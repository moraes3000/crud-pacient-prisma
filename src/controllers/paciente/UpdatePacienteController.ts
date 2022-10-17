import { Request, Response } from "express";
import { EditPacienteService } from "../../services/paciente/EditPacienteService";

class EditPacienteController {
  async handle(req: Request, res: Response) {
    const paciente_id = req.query.paciente_id as string;

    const { id } = req.params

    const editPacienteService = new EditPacienteService()

    const updatePaciente = await editPacienteService.execute({
      paciente_id: paciente_id,
      name: req.body.name
    })

    return res.json(updatePaciente)
  }
}

export { EditPacienteController }