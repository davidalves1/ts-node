import { Request, Response } from 'express'

import User from '../models/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const user = await User.find()

    return res.json(user)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.send(user)
  }
}

export default new UserController()
