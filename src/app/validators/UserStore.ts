import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction): void => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(6)
    })

    await schema.validate(req.body, { abortEarly: false })
    return next()
  } catch (error) {
    return res.status(400).json({
      error: 'Validation fails', messages: error.inner
    })
  }
}
