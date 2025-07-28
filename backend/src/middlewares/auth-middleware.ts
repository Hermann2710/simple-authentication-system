import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret"

interface JwtPayload {
  userId: string
  email: string
}

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload
  }
}

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Non authorisé: Jeton(Token) non fourni !",
    })
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      message: "Jeton(Token) invalide ou expiré",
      error: (error as any).message,
    })
  }
}
