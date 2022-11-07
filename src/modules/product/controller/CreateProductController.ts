import { Request, Response } from 'express'
import { CreateProductService } from '../services/CreateProductService';


class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, } = req.body;

    if (!req.file) {
      throw new Error('erro upload file')
    } else {
      const { originalName, filename: banner } = req.file

      const createProductService = new CreateProductService()

      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,

      });

      return res.json(product)
    }
  }
}

export { CreateProductController }