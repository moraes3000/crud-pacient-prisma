import prismaClient from "../../prisma";

interface PacienteProps {
  name: string;
  paciente_id: string;
}



class EditPacienteService {
  async execute({ name, paciente_id }: PacienteProps) {

    const paciente = await prismaClient.pacient.update({
      where: {
        id: paciente_id
      },
      data: {
        name: name
      },

    })
    return paciente
  }
}
export { EditPacienteService }