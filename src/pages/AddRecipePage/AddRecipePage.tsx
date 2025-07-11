import type { FC } from 'react'
import type { AddRecipePageProps } from './AddRecipePageTypes'
import Container from '../../components/Container/Container'

const AddRecipePage: FC<AddRecipePageProps> = () => {
  return (
    <Container>
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Додати новий рецепт</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Назва рецепту"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Опис..."
          className="w-full px-4 py-2 border rounded"
          rows={5}
        />
        <input
          type="text"
          placeholder="Інгредієнти (через кому)"
          className="w-full px-4 py-2 border rounded"
        />
        <input type="file" className="w-full" />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Зберегти рецепт
        </button>
      </form>
    </div>
    </Container>
  )
}

export default AddRecipePage