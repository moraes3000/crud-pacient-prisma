import prismaClient from "../../../prisma"


class ListUserService {
  async execute() {
    const user = await prismaClient.user.findMany({
      // select: {
      //   id: true,
      //   name: true,
      //   created_at: true
      // },

      orderBy: {
        name: 'asc'
      }
    })


    return user
  }
}


export { ListUserService }