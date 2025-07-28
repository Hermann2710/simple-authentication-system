import { Request, Response } from "express"
import User from "../models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret"

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).json({ message: "Cet email déjà utilisé !" })

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    await newUser.save()

    res.status(201).json({ message: "Utilisateur crée avec succès !" })
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: (error as any).message,
    })
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user)
      return res.status(404).json({ message: "Cet utilisateur n'existe pas !" })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ message: "Identifiants invalides !" })

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.json({ token })
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: (error as any).message,
    })
  }
}
