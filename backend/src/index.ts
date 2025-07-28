import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth-routes"

dotenv.config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("Connecté à MongoDB")
    app.listen(PORT, () => {
      console.log(`Serveur en écoute sur le port: ${PORT}`)
    })
  })
  .catch((err) => console.error(err))
