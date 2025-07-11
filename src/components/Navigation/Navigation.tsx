import { useState, useEffect, type FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import type { NavigationProps } from './NavigationTypes'

const navItems = [
  { path: '/', label: 'Рецепти' },
  { path: '/my-recipes', label: 'Мої рецепти' },
  { path: '/add-recipe', label: 'Додати рецепт' },
]

const Navigation: FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // заміни логіку авторизації на свою
  const navigate = useNavigate()

  // Закриваємо меню при зміні розміру екрану на великий
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // логіка виходу
      setIsLoggedIn(false)
    } else {
      navigate('/login')
      setIsLoggedIn(true)
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Бургер іконка для мобільних */}
      <button
        aria-label="Відкрити меню"
        onClick={toggleMenu}
        className="md:hidden p-2 rounded hover:bg-gray-200 transition"
        type="button"
      >
        <svg
          className="w-6 h-6 fill-current text-gray-700"
          aria-hidden="true"
          focusable="false"
        >
          <use xlinkHref="/icons/icons.svg#icon-menu3" />
        </svg>
      </button>

      {/* Меню навігації */}
      <nav
        className={`flex flex-col md:flex-row md:items-center md:space-x-6 bg-white md:bg-transparent fixed md:static top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto shadow-md md:shadow-none z-40 md:z-auto transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
        }`}
      >
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              'block px-4 py-2 md:p-0 text-gray-700 hover:text-blue-600 transition ' +
              (isActive ? 'font-semibold border-b-2 border-blue-600 md:border-none' : '')
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Кнопка увійти/вийти */}
        <button
          onClick={handleAuthClick}
          className="block px-4 py-2 md:p-0 text-gray-700 hover:text-blue-600 transition cursor-pointer"
          type="button"
        >
          {isLoggedIn ? 'Вийти' : 'Увійти'}
        </button>
      </nav>
    </>
  )
}

export default Navigation
