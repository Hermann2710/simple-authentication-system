import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../services/api"
import { useAuthContext } from "../contexts/auth-context-helpers"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" })
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await api.post("/auth/login", form)
      login(res.data.token)
      navigate("/protected")
    } catch (error) {
      alert("Erreur lors la connexion")
      console.log(error)
    }
  }
  return (
    <form
      className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded space-y-4'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-semibold text-center'>Connexion</h2>
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
        title='Connexion'
      >
        Se connecter
      </button>
      <p className='text-center'>
        Vous êtes nouveau ?{" "}
        <Link
          className='text-blue-600 hover:text-blue-700 hover:underline transition'
          to='/register'
        >
          Inscrivez vous !
        </Link>
      </p>
    </form>
  )
}
