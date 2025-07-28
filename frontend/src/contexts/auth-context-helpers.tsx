import { createContext, useContext } from "react"
import { AuthContextType } from "./auth-context"

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      "Le useAuthContext doit être utilisé dans un AuthContextProvider"
    )
  }
  return context
}
