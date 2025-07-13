import api from './axios'

// структурa об’єкта з даними для логіну/реєстрації
interface AuthCredentials {
  email: string
  password: string
}

export const loginRequest = async (data: AuthCredentials) => {
  const res = await api.post('/auth/login', data)
  return res.data // { user, token }
}

export const registerRequest = async (data: AuthCredentials) => {
  const res = await api.post('/auth/register', data)
  return res.data // { user, token }
}

export const refreshTokenRequest = async () => {
  const res = await api.post('/auth/refresh')
  return res.data // { user, token }
}
