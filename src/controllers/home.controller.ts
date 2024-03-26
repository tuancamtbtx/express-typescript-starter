import { Request, Response } from 'express'

export default class HomeController {
  constructor() {}
  public welcome(req: Request, res: Response): Response {
    return res.json({ message: 'Welcome to bezkoder application.' })
  }
}
