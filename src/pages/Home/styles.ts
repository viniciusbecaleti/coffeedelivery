import styled from 'styled-components'

import homeBackground from '../../assets/home-background.svg'

export const HomeContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${homeBackground}) no-repeat center;
    filter: blur(80px);
    z-index: -1;
  }

  .content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3.5rem;
    padding: 5.75rem 0;
  }
`

export const HomeHeader = styled.div`
  > h1 {
    color: ${({ theme }) => theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
  }

  > p {
    margin-top: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const ListBenefit = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;
  max-width: 38.5rem;
  margin-top: 4.125rem;
  list-style: none;
`

export const OurCoffees = styled.section`
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ListCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.75rem 2rem;
  margin-top: 2rem;
`
