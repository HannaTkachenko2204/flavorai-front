import type { FC } from 'react'
import type { RecipeDetailsPageProps } from './RecipeDetailsPageTypes'
import Container from '../../components/Container/Container'

const RecipeDetailsPage: FC<RecipeDetailsPageProps> = () => {
  return (
    <Container>
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Назва рецепту</h1>
      <img
        src=""
        alt="Фото страви"
        className="rounded mb-4"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Інгредієнти</h2>
        <ul className="list-disc ml-5">
          <li>Інгредієнт</li>
          <li>Інгредієнт</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Інструкція</h2>
        <p>Опис приготування страви...</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Оцініть рецепт:</h3>
        <div className="flex gap-1 text-yellow-500 text-2xl">
          {'★'.repeat(4)}
          {'☆'}
        </div>
      </div>
    </div>
    </Container>
  )
}

export default RecipeDetailsPage