import api from './axios'
// окремий інстанс без інтерцепторів
import axios from 'axios'

const plainAxios = axios.create({
  baseURL: 'https://flavorai-back.onrender.com',
  withCredentials: true,
})

// структурa об’єкта з даними для логіну/реєстрації
interface AuthCredentials {
  email: string
  password: string
}

interface User {
  id: string
  email: string
}

interface RefreshResponse {
  user: User
  token: string
}

export const loginRequest = async (data: AuthCredentials) => {
  const res = await api.post('/auth/login', data)
  return res.data // { user, token }
}

export const registerRequest = async (data: AuthCredentials) => {
  const res = await api.post('/auth/register', data)
  return res.data // { user, token }
}

export const refreshTokenRequest = async (): Promise<RefreshResponse> => {
  const res = await plainAxios.post<RefreshResponse>('/auth/refresh')
  return res.data
}

export const logoutRequest = () => {
  return api.post('/auth/logout');
}
