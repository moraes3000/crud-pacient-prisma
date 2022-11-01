import prismaClient from "../../../prisma";

class ListPacientesService {
  async execute() {
    const paciente = await prismaClient.pacient.findMany({
      // select: {
      //   id: true,
      //   name: true,
      //   created_at: true
      // },
      include: {
        consulta: true
      },
      orderBy: {
        name: 'asc'
      }
    })


    return paciente
  }
}


export { ListPacientesService }