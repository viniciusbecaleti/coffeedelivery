import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;

  .content {
    display: grid;
    grid-template-columns: 1fr 448px;
    gap: 2rem;
  }
`

export const AddressAndPaymentMethod = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const SelectedCoffeesAndCheckout = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

const ContentBoxBase = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-card']};
`

export const ContentForm = styled(ContentBoxBase)`
  form {
    display: grid;
    grid-template-areas: 'A . .' 'B B B' 'C D D' 'E F G';
    grid-template-columns: 200px 1fr 60px;
    gap: 1rem 0.75rem;
    margin-top: 2rem;

    input {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-text']};
      padding: 0.75rem;
      border: 1px solid ${({ theme }) => theme['base-button']};
      border-radius: 4px;
      background: ${({ theme }) => theme['base-input']};
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme['base-label']};
      }

      &:focus {
        border-color: ${({ theme }) => theme['yellow-dark']};
      }
    }

    input:nth-of-type(1) {
      grid-area: A;
    }

    input:nth-of-type(2) {
      grid-area: B;
    }

    input:nth-of-type(3) {
      grid-area: C;
    }

    input:nth-of-type(4) {
      grid-area: D;
    }

    input:nth-of-type(5) {
      grid-area: E;
    }

    input:nth-of-type(6) {
      grid-area: F;
    }

    input:nth-of-type(7) {
      grid-area: G;
    }
  }
`

export const ContentPaymentMethod = styled(ContentBoxBase)`
  margin-top: 0.75rem;
`

export const InputRadioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
  margin-top: 2rem;

  input {
    position: fixed;
    width: 0;
    opacity: 0;

    &:checked + label {
      background: ${({ theme }) => theme['purple-light']};
      border-color: ${({ theme }) => theme.purple};
    }

    &:not(:checked):hover + label {
      background: ${({ theme }) => theme['base-hover']};
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: ${({ theme }) => theme['base-button']};
    transition: background-color 0.1s, border-color 0.1s;
    cursor: pointer;

    svg {
      color: #8047f8;
    }
  }
`

export const ContentCheckout = styled(ContentBoxBase)`
  border-radius: 6px 44px 6px 44px;
`

export const CheckoutButton = styled.button`
  display: inline-block;
  width: 100%;
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1.25rem;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.yellow};
  cursor: pointer;
`

export const EmptyCart = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 0.875rem;
`
