import React from "react"
import { useAuthContext } from "../contexts/auth-context-helpers"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { token } = useAuthContext()
  return token ? <>{children}</> : <Navigate to='/login' />
}
