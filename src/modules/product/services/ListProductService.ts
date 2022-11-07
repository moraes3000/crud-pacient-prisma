import prismaClient from "../../../prisma"

class ListProductService {
  async execute() {
    const products = await prismaClient.product.findMany({
      orderBy: {
        name: 'asc'
      }
    })
    return products
  }
}

export { ListProductService }