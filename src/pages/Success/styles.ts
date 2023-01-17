import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5rem 0;

  .content {
    display: flex;
    align-items: flex-end;
    gap: 4.75rem;
  }
`

export const ConfirmedRequest = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-top: 0.25rem;
  }
`

export const OrderDatails = styled.div`
  position: relative;
  margin-top: 2.5rem;
  padding: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px 6px 36px;
    padding: 1px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      gap: 0.75rem;

      span {
        line-height: 1.3;
      }
    }
  }
`
