import axios from "axios"

const api = axios.create({
  baseURL: "https://simple-authentication-system-6u61.onrender.com/api",
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
