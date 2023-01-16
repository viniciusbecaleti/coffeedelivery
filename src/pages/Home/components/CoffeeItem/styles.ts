import styled from 'styled-components'

export const CoffeeContainer = styled.article`
  display: grid;
  padding: 1.25rem;
  padding-top: 0;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme['base-card']};
  text-align: center;

  img {
    margin: 0 auto;
    margin-top: -1.25rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    list-style: none;

    li {
      font-size: 0.625rem;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      margin-top: 0.75rem;
      border-radius: 100px;
      color: ${({ theme }) => theme['yellow-dark']};
      background: ${({ theme }) => theme['yellow-light']};
    }
  }

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-label']};
    margin-top: 0.5rem;
  }
`

export const PriceAndAddToCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 2rem;

  strong {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    span {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.3;
    }
  }
`

export const AmountAndCart = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
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

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme['purple-dark']};
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
