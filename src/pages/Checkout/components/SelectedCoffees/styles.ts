import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  & + & {
    margin-top: 1.5rem;
  }
`

export const CoffeeInfoAndController = styled.div`
  display: flex;
  gap: 1.25rem;

  > span {
    color: ${({ theme }) => theme['base-subtitle']};
  }

  img {
    max-height: 4rem;
  }
`

export const AmountControllerAndRemoveButton = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['base-text']};
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
