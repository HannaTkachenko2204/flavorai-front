import type { FC } from "react";
import type { RecipeListPageProps } from "./RecipeListPageTypes";
import Container from "../../components/Container/Container";
import { recipes } from "../../data/recipes";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipeListPage: FC<RecipeListPageProps> = () => {
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
