import { createSlice } from '@reduxjs/toolkit' // допомагає створювати reducers + actions в одному місці
import type { PayloadAction } from '@reduxjs/toolkit' // для типізації дій (actions) з payload, тобто тими, що передають дані

interface User {
  email: string
}

// структура гілки auth в Redux store:
interface AuthState {
  user: User | null
  token: string | null
  isLoggedIn: boolean
}

// початковий стан гілки auth:
const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
}

// створення slice
const authSlice = createSlice({
  name: 'auth', // назва-префікс для екшенів, наприклад: 'auth/loginSuccess'
  initialState,
  reducers: { // об'єкт з функціями, які оновлюють стан
    loginSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
      // state тут - це тільки частина стану, яка відповідає за auth
      state.user = action.payload.user // оновлюємо user з payload
      state.token = action.payload.token // оновлюємо token з payload
      state.isLoggedIn = true
    },
    // скидаємо всі дані користувача при логауті
    logout(state) {
      state.user = null
      state.token = null
      state.isLoggedIn = false
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions // об'єкт, який містить усі екшени під власними іменами
// основний експорт з цього файлу, тому пізніше ми можемо імпортувати його будь-яким ім'ям: у store.ts - import authReducer from './slices/authSlice'
export default authSlice.reducer // сам ред'юсер (функція, яка змінює стан)
