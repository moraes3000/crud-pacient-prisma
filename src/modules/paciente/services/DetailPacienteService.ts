import prismaClient from "../../../prisma";


interface Props {
  paciente_id: string;
}

class DetailPacientService {
  async execute({ paciente_id }: Props) {
    const paciente = await prismaClient.pacient.findMany({
      where: {
        id: paciente_id
      },
      include: {
        consulta: true
      },
    })
    return paciente
  }
}

export { DetailPacientService }