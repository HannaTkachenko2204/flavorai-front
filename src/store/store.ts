import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

// configureStore - це рекомендований спосіб створення Redux store у сучасному Redux
// передаємо об’єкт reducer, у якому:
// auth - це назва частини стану, яка буде доступна як state.auth
// authReducer - це функція, яка відповідає за оновлення цієї частини стану
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState> // типізація всього Redux-стану
export type AppDispatch = typeof store.dispatch // корисно, коли використовуємо асинхронні запити
