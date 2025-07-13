// Власний хук для того щоб при запуску застосунку одразу перевірити, чи є валідний токен:
// - якщо є, оновити стан авторизації (користувача)
// - якщо немає - очистити стан, щоб не лишати користувача "логінутим" з невалідним токеном

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshTokenRequest } from "../api/authService";
import { loginSuccess, logout } from "../store/slices/authSlice";

export const useAuthCheck = () => {
  const dispatch = useDispatch();

  // використовуємо useEffect, залежність [dispatch]) - щоб виконати перевірку аутентифікації один раз при монтуванні компонента
  useEffect(() => {
    const checkAuth = async () => { // асинхронна функція checkAuth 
    // робить запит refreshTokenRequest() - намагається оновити токен (refresh)
      try {
        const data = await refreshTokenRequest();
        dispatch(loginSuccess(data)); // оновлюємо стан з новим токеном та інформацією користувача
      } catch (err) {
        console.error("Refresh token error:", err);
        dispatch(logout()); // видаляємо інформацію про користувача та токен із Redux
      }
    };

    checkAuth();
  }, [dispatch]);
};