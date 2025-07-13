import { useState, type FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Рецепти' },
  { path: '/my-recipes', label: 'Мої рецепти' },
  { path: '/add-recipe', label: 'Додати рецепт' },
]

const Navigation: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
      navigate('/')
    } else {
      navigate('/login')
      setIsLoggedIn(true)
    }
  }

  return (
    <nav className="flex flex-row items-center bg-transparent shadow-none">
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            'block px-4 py-2 text-gray-700 hover:text-blue-600 transition ' +
            (isActive ? 'font-semibold' : '')
          }
        >
          {label}
        </NavLink>
      ))}

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