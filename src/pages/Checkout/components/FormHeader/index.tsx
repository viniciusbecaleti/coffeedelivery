import { ReactNode } from 'react'
import { FormHeaderContainer } from './styles'

interface FormHeaderProps {
  icon: ReactNode
  title: string
  description: string
}

export function FormHeader({ icon, title, description }: FormHeaderProps) {
  return (
    <FormHeaderContainer>
      {icon}
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </FormHeaderContainer>
  )
}
