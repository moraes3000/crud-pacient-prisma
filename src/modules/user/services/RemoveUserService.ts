import prismaClient from "../../../prisma";



interface Props {
  item_id: string;
}


class RemoveUserService {
  async execute({ item_id }: Props) {
    const removeId = await prismaClient.user.delete({
      where: {
        id: item_id
      }
    })
    return removeId
  }
}


export { RemoveUserService }