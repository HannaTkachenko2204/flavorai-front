import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/slices/authSlice'
import type { RootState } from '../store/store'
import { logoutRequest } from '../api/authService'

const Navigation: FC = () => {
  const isLoggedIn = useSelector((state: RootState) => Boolean(state.auth.token))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAuthClick = async() => {
    if (isLoggedIn) {
      try {
        await logoutRequest();  // видаляємо refresh token cookie на сервері
      } catch (error) {
        console.error('Logout error', error);
      }
      dispatch(logout())
      navigate('/')
    } else {
      navigate('/login')
    }
  }

  return (
    <nav className="flex flex-row items-center bg-transparent shadow-none">
      <NavLink
        to="/"
        className={({ isActive }) =>
          'block px-4 py-2 text-gray-700 hover:text-blue-600 transition ' +
          (isActive ? 'font-semibold' : '')
        }
      >
        Рецепти
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/my-recipes"
            className={({ isActive }) =>
              'block px-4 py-2 text-gray-700 hover:text-blue-600 transition ' +
              (isActive ? 'font-semibold' : '')
            }
          >
            Мої рецепти
          </NavLink>

          <NavLink
            to="/add-recipe"
            className={({ isActive }) =>
              'block px-4 py-2 text-gray-700 hover:text-blue-600 transition ' +
              (isActive ? 'font-semibold' : '')
            }
          >
            Додати рецепт
          </NavLink>
        </>
      )}

      <button
        onClick={handleAuthClick}
        className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition cursor-pointer"
        type="button"
      >
        {isLoggedIn ? 'Вийти' : 'Увійти'}
      </button>
    </nav>
  )
}

export default Navigation