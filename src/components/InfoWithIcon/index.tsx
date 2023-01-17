import { ReactNode } from 'react'

import { InfoContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  info: ReactNode
  varientColor: 'purple' | 'yellow' | 'orange' | 'gray'
}

export function InfoWithIcon({ icon, info, varientColor }: InfoWithIconProps) {
  return (
    <InfoContainer varientColor={varientColor}>
      <i>{icon}</i>
      <span>{info}</span>
    </InfoContainer>
  )
}
