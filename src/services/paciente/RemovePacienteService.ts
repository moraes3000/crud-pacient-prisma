import prismaClient from "../../prisma";


interface Props {
  item_id: string;
}


class RemovePacienteService {
  async execute({ item_id }: Props) {
    const removeId = await prismaClient.pacient.delete({
      where: {
        id: item_id
      }
    })
    return removeId
  }
}


export { RemovePacienteService }