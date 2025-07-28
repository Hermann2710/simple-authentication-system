import { Link } from "react-router-dom"
import { useAuthContext } from "../contexts/auth-context-helpers"

export default function Navbar() {
  const { token, logout } = useAuthContext()

  return (
    <div className='bg-gray-800 text-white px-4 py-2'>
      <div className='max-w-2xl mx-auto'>
        <nav className={`flex items-center justify-between`}>
          <Link className='text-xl font-bold select-none py-1' to='/'>
            SAuth
          </Link>
          <div className='space-x-4'>
            {!token ? (
              <>
                <Link className='hover:underline' to='/register'>
                  Inscription
                </Link>
                <Link className='hover:underline' to='/login'>
                  Connexion
                </Link>
              </>
            ) : (
              <>
                <Link className='hover:underline' to='/protected'>
                  Page Protégée
                </Link>
                <button
                  className='bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition'
                  onClick={logout}
                >
                  Déconnexion
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}
