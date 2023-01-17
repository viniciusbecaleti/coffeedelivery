import styled from 'styled-components'

const VARIENT_COLORS = {
  orange: 'yellow-dark',
  gray: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface InfoContainerProps {
  varientColor: keyof typeof VARIENT_COLORS
}

export const InfoContainer = styled.li<InfoContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.white};
    padding: 0.5rem;
    border-radius: 50%;
    background: ${({ theme, varientColor }) =>
      theme[VARIENT_COLORS[varientColor]]};
  }
`
