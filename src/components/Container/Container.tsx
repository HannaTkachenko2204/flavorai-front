import type { FC } from 'react'
import type { ContainerProps } from './ContainerTypes'

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      {children}
    </div>
  )
}

export default Container