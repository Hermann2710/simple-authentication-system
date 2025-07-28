import { Link } from "react-router-dom"
import { useAuthContext } from "../contexts/auth-context-helpers"

export default function Home() {
  const { token } = useAuthContext()
  return (
    <div className='text-center mt-20'>
      <h1 className='text-4xl font-bold mb-4'>Bienvenue sur AuthApp</h1>
      <p className='text-gray-600 mb-8'>
        Ceci est une démonstration d'authentification avec React, Node.js et
        JWT.
      </p>
      {token ? (
        <>
          <p className='mb-4'>Vous êtes connectés</p>
          <Link to='/protected' className='btn'>
            Accéder à la page protégée.
          </Link>
        </>
      ) : (
        <>
          <Link to='/login' className='btn mr-4'>
            Connexion
          </Link>
          <Link to='/login' className='btn'>
            Inscription
          </Link>
        </>
      )}
    </div>
  )
}
