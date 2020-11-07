import { Request, Response } from "express";
import userModel from "../schemas/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await userModel.find();
    return res.json({ data: users });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { email, firstName, lastName } = req.body;
    const user = await userModel.create({
      email,
      firstName,
      lastName,
    });

    const user_ = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName(),
    };

    return res.json({ data: user_ });
  }
}

export default new UserController();
