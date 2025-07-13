import type { FC } from 'react'
import { Link } from 'react-router-dom'

export interface RecipeCardProps {
  id: number | string
  title: string
  description: string
}

const RecipeCard: FC<RecipeCardProps> = ({ id, title, description }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded shadow p-4 w-full h-full">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <Link
        to={`/recipes/${id}`}
        className="text-blue-500 mt-4 inline-block hover:underline"
      >
        Переглянути
      </Link>
    </div>
  )
}

export default RecipeCard

