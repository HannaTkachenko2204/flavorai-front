import type { FC } from "react";
import Container from "../components/Container";
import RecipeCard from "../components/RecipeCard";
import { myRecipes } from "../data/myRecipes";
import { Link } from "react-router-dom";

const MyRecipesPage: FC = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Мої рецепти</h1>
      <Link
        to="/add-recipe"
        className="inline-block mb-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Додати новий рецепт
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {myRecipes.length === 0 ? (
          <p>У вас ще немає рецептів.</p>
        ) : (
          myRecipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)
        )}
      </div>
    </Container>
  );
};

export default MyRecipesPage;
