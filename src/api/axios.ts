import axios from 'axios'
import { store } from '../store/store'
import { logout, loginSuccess } from '../store/slices/authSlice'
import { refreshTokenRequest } from './authService'

// cтворюємо кастомний екземпляр axios
const api = axios.create({
  baseURL: 'https://flavorai-back.onrender.com/api',
  withCredentials: true, // дозволяє надсилати httpOnly cookies (потрібно для refresh токенів, бо вони в cookie)
})

// додаємо accessToken до кожного запиту
// перед кожним запитом перехоплюємо конфіг і додаємо токен (якщо він є) в заголовок Authorization
// config - це об’єкт конфігурації HTTP-запиту, який описує всі деталі, як саме має бути виконаний запит
api.interceptors.request.use((config) => {

// функція, яка обробляє та модифікує конфіг запиту (обов’язкова)
  const token = store.getState().auth.token // витягуємо токен з Redux state
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config // повертає конфіг, інакше запит не буде виконаний
})

// функція обробки помилки запиту (необов’язкова) + автоматичне оновлення accessToken
api.interceptors.response.use(
  (response) => response, // якщо відповідь успішна - просто повертаємо її (response => response)
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 && // статус відповіді 401 (Unauthorized) - означає, що токен протермінований або недійсний
      !originalRequest._retry // запит ще не був повторений
    ) {
      originalRequest._retry = true
      try {
        const res = await refreshTokenRequest() // виконуємо запит на оновлення токена
        store.dispatch(loginSuccess(res)) // оновлюємо token у глобальному стані Redux
        originalRequest.headers.Authorization = `Bearer ${res.token}`
        return api(originalRequest) // повторюємо оригінальний запит з оновленим токеном
      } catch (refreshError) {
        store.dispatch(logout()) // викликаємо logout() - очищуємо стан користувача (видаляємо токен, ставимо isLoggedIn в false)
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default api
