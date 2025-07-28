import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
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
    <form
      className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded space-y-4'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-semibold text-center'>Inscription</h2>
      <div className='space-y-1'>
        <label className='font-medium' htmlFor='username'>
          Nom d'utilisateur
        </label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='johndoe'
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className='w-full border border-gray-300 py-2 rounded px-2'
        />
      </div>
      <div className='space-y-1'>
        <label className='font-medium' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='johndoe@gmail.com'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className='w-full border border-gray-300 py-2 rounded px-2'
        />
      </div>
      <div className='space-y-1'>
        <label className='font-medium' htmlFor='password'>
          Mot de passe
        </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Mot de passe'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className='w-full border border-gray-300 py-2 rounded px-2'
        />
      </div>
      <button
        className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition'
        type='submit'
        title='Inscription'
      >
        S'inscrire
      </button>
      <p className='text-center'>
        Déjà inscrit ?
        <Link
          className='text-blue-600 hover:text-blue-700 hover:underline transition'
          to='/login'
        >
          Connectez vous !
        </Link>
      </p>
    </form>
  )
}
