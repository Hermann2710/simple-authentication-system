import React, { useEffect, useState } from "react"
import { AuthContext } from "./auth-context-helpers"

export interface AuthContextType {
  token: string | null
  login: (token: string) => void
  logout: () => void
}

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("token")
    if (saved) setToken(saved)
  }, [])

  const login = (token: string) => {
    setToken(token)
    localStorage.setItem("token", token)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
