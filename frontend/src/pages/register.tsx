import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" })
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await api.post("/auth/register", form)
      alert("Compte crée avec succès !")
      navigate("/login")
    } catch (error) {
      alert("Erreur lors de l'inscription")
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <div>
        <label htmlFor='username'>Nom d'utilisateur</label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='johndoe'
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
      </div>
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
      <button type='submit' title='Inscription'>
        S'inscrire
      </button>
    </form>
  )
}
