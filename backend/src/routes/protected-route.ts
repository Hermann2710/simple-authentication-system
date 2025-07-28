import { Router, Request, Response } from "express"
import { requireAuth } from "../middlewares/auth-middleware"

const router = Router()

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.json({
    message: "Accès authorisé à la ressource protégée !",
    user: req.user,
  })
})

export default router
