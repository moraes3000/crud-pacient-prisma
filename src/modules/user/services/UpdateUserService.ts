import prismaClient from "../../../prisma";


interface IUserProps {
  name: string;
  user_id: string;
}


class UpdateUserService {
  async execute({ name, user_id }: IUserProps) {

    const User = await prismaClient.user.update({
      where: {
        id: user_id
      },
      data: {
        name: name
      },

    })
    return User
  }
}
export { UpdateUserService }