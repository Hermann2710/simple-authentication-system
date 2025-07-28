import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Register from "./pages/register"
import Login from "./pages/login"
import ProtectedRoute from "./middlewares/protected-route"
import Protected from "./pages/protected"
import Home from "./pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/protected'
          element={
            <ProtectedRoute>
              <Protected />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
