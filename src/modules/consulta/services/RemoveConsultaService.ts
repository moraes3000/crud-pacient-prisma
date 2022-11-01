import prismaClient from "../../../prisma";


interface Props {
  item_id: string;
}

class RemoveConsultaService {
  async execute({ item_id }: Props) {
    const removeId = await prismaClient.consult.delete({
      where: {
        id: item_id
      }
    })
    return removeId
  }
}

export { RemoveConsultaService }