import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
  isLoggedIn: boolean
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isLoggedIn: !!localStorage.getItem('token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
      localStorage.setItem('token', action.payload.token)
    },
    logout(state) {
      state.user = null
      state.token = null
      state.isLoggedIn = false
      localStorage.removeItem('token')
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
