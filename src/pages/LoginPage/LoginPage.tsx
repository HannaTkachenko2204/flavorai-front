import type { FC } from 'react'
import type { LoginPageProps } from './LoginPageTypes'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <Container>
    <div className="flex min-h-screen items-start justify-center">
      <form className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Увійти</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <input
          type="password"
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
          Немає акаунта?{' '}
          <Link to="/register" className="text-blue-500">
              Зареєструватися
            </Link>
        </p>
      </form>
    </div>
    </Container>
  )
}

export default LoginPage