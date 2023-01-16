import styled from 'styled-components'

export const FormHeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  strong {
    font-weight: 400;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    margin-top: 0.125rem;
  }
`
