import { useState, type FC } from "react";
import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../api/authService"; // API-запит для логіну, який відправляє email і пароль і повертає дані користувача
import { loginSuccess } from "../store/slices/authSlice"; // Redux-екшен loginSuccess - для оновлення стану після успішного логіну
import { useDispatch } from "react-redux"; // хук, щоб відправляти дії в Redux

const LoginPage: FC = () => {
  const dispatch = useDispatch(); // для відправки Redux-екшенів
  const navigate = useNavigate(); // для переходів між сторінками
  const [error, setError] = useState(""); // локальний стан для повідомлень про помилки

  // обробник форми, який запускається при сабміті:
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    if (!email || !password) {
      setError("Всі поля обов'язкові");
      return;
    }

    if (password.length < 6) {
      setError("Пароль має містити щонайменше 6 символів");
      return;
    }

    try {
      const data = await loginRequest({ email, password }); // асинхронна функція, яка виконує запит до бекенду
      // data: {"user": { "email": "anna@email.com" },"token": "abc123"}
      dispatch(loginSuccess(data)); // відправляємо екшен у Redux, щоб зберегти отримані дані в глобальний стан
      navigate("/"); 
    } catch (err) {
      console.error("Login error", err);
      setError("Невірний email або пароль. Спробуйте ще раз.");
    }
  };

  return (
    <Container>
      <div className="flex min-h-screen items-start justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm p-6 bg-white rounded shadow"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Увійти</h2>
          {error && (
            <div className="text-red-600 text-sm mb-3 text-center">{error}</div>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-3 px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="w-full mb-3 px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            Увійти
          </button>
          <p className="mt-4 text-center text-sm">
            Немає акаунта?{" "}
            <Link to="/register" className="text-blue-500">
              Зареєструватися
            </Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
