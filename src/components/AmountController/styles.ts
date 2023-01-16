import styled from 'styled-components'

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-align: center;
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.purple};
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  span {
    min-width: 2ch;
    color: ${({ theme }) => theme['base-title']};
  }
`
