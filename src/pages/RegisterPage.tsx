import { useState, type FC } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { registerRequest } from "../api/authService";
import { loginSuccess } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
      const data = await registerRequest({ email, password });
      dispatch(loginSuccess(data)); // одразу логінимо
      navigate("/"); // переходимо на головну
    } catch (err) {
      console.error("Register error", err);
      setError("Щось пішло не так. Спробуйте ще раз");
    }
  };

  return (
    <Container>
      <div className="flex min-h-screen items-start justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm p-6 bg-white rounded shadow"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Реєстрація
          </h2>
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
            Зареєструватися
          </button>
          <p className="mt-4 text-center text-sm">
            Маєте акаунт?{" "}
            <Link to="/login" className="text-blue-500">
              Увійти
            </Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
