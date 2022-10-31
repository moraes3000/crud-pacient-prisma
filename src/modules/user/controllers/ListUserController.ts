import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";


class ListUserController {
  async handle(req: Request, res: Response) {
    const listarUserService = new ListUserService()

    const User = await listarUserService.execute()


    return res.json(User)
  }
}

export { ListUserController }