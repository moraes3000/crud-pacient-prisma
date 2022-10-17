import prismaClient from "../../prisma";

interface PacienteProps {
  name: string;
}

class CreatePacienteService {
  async execute({ name }: PacienteProps) {

    const paciente = await prismaClient.pacient.create({
      data: {
        name: name
      },
      // select: {
      //   id: true,
      //   name: true,
      // }
    })




    return paciente
  }
}


export { CreatePacienteService }