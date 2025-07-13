import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecipeListPage from "./pages/RecipeListPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import AddRecipePage from "./pages/AddRecipePage";
import Header from "./components/Header";
import { useAuthCheck } from "./hooks/useAuthCheck";
import PrivateRoute from "./components/PrivateRoute";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

function App() {
  useAuthCheck();

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<RecipeListPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
          <Route
            path="/my-recipes"
            element={<PrivateRoute element={<MyRecipesPage />} />}
          />
          <Route
            path="/add-recipe"
            element={<PrivateRoute element={<AddRecipePage />} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
