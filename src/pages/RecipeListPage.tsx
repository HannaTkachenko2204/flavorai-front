import type { FC } from "react";
import Container from "../components/Container";
import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

const RecipeListPage: FC = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Рецепти</h1>

      <input
        type="text"
        placeholder="Пошук рецепту..."
        className="w-full mb-6 px-4 py-2 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </Container>
  );
};

export default RecipeListPage;
