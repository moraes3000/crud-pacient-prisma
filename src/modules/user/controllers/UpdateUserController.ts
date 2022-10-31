import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";


class UpdateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string;

    const { id } = req.params

    const updateUserService = new UpdateUserService()

    const updateUser = await updateUserService.execute({
      user_id: user_id,
      name: req.body.name
    })

    return res.json(updateUser)
  }
}

export { UpdateUserController }