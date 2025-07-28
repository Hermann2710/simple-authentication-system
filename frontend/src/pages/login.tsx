import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import { useAuthContext } from "../contexts/auth-context-helpers"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" })
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await api.post("/auth/register", form)
      login(res.data.token)
      navigate("/protected")
    } catch (error) {
      alert("Erreur lors la connexion")
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='johndoe@gmail.com'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='password'>Mot de passe</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Mot de passe'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <button type='submit' title='Connexion'>
        Se connecter
      </button>
    </form>
  )
}
