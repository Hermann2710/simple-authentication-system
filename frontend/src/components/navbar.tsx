import { Link } from "react-router-dom"
import { useAuthContext } from "../contexts/auth-context-helpers"

export default function Navbar() {
  const { token, logout } = useAuthContext()

  return (
    <nav>
      <Link to='/register'>Inscription</Link>
      <Link to='/login'>Connexion</Link>
      <Link to='/protected'>Page Protégée</Link>
      {token && <button onClick={logout}>Déconnexion</button>}
    </nav>
  )
}
