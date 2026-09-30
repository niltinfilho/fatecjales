import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const form = req.body;
    console.log(form);

    const service = new CreateUserService();
    const user = await service.execute();
    res.json({ message: user });
  };
}
