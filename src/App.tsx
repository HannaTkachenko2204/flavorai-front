import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import RecipeListPage from './pages/RecipeListPage/RecipeListPage'
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailsPage'
import MyRecipesPage from './pages/MyRecipesPage/MyRecipesPage'
import AddRecipePage from './pages/AddRecipePage/AddRecipePage'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        <Route path="/my-recipes" element={<MyRecipesPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
      </Routes>
      </main>
    </Router>
  )
}

export default App
