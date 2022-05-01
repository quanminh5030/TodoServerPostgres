import { Request, Response, NextFunction } from 'express'
import { ForbiddenError } from './errorHandler'

const adminCheck = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as any
  if (user?.isAdmin) {
    next()
  } else {
    throw new ForbiddenError()
  }
}

export default adminCheck