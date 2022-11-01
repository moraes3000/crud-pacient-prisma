import prismaClient from "../../../prisma";

interface ConsultaProps {
  description: string;
  paciente_id: string
}

class CreateConsultaService {
  async execute({ description, paciente_id }: ConsultaProps) {

    const consulta = await prismaClient.consult.create({
      data: {
        description: description,
        paciente_id: paciente_id
      },
      // select: {
      //   id: true,
      //   name: true,
      // }
    })




    return consulta
  }
}


export { CreateConsultaService }