import prismaClient from "../../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;

}

class CreateProductService {
  async execute({ name, price, banner, description, }: ProductRequest) {

    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
      }
    })

    return product
  }
}

export { CreateProductService }