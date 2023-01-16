import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;

  span,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 6px;
  }

  span {
    gap: 0.25rem;
    color: ${({ theme }) => theme['purple-dark']};
    background: ${({ theme }) => theme['purple-light']};

    svg {
      color: ${({ theme }) => theme.purple};
    }
  }

  a {
    position: relative;
    background: ${({ theme }) => theme['yellow-light']};

    svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`

export const CartItem = styled.strong`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  top: calc(0px - 0.625rem);
  right: calc(0px - 0.625rem);
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  border-radius: 50%;
  background: ${({ theme }) => theme['yellow-dark']};
`
