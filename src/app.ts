import { Request, Response } from 'express'

const hello = async (req: Request, res: Response) => {
  return res.send(`Hello`)
}

export { hello }
