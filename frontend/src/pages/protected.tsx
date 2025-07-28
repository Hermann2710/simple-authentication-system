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
  return (
    <div className='max-w-xl mx-auto mt-10 p-4 bg-green-100 border-l-4 border-green-600 text-green-800'>
      <h2 className='text-xl font-bold mb-2'>Page protégée</h2>
      <p>{message}</p>
    </div>
  )
}
