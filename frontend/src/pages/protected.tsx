import { useEffect, useState } from "react"
import api from "../services/api"

export default function Protected() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    api
      .get("/protected")
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Non authorisé !"))
  }, [])
  return <h2>{message}</h2>
}
