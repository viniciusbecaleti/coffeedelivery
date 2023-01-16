import { useContext } from 'react'

import { Total, ValuesFormattedContainer } from './styles'

import { CartContext } from '../../../../contexts/CartContext'
import { formatValue } from '../../../../utils/formatValue'

export function ValuesFormatted() {
  const { totalItems, totalValue } = useContext(CartContext)

  const tax = 3.5

  return (
    <ValuesFormattedContainer>
      <p>
        Total de itens <span>{totalItems}</span>
      </p>

      <p>
        Entrega <span>R${formatValue(tax)}</span>
      </p>

      <Total>
        Total <span>R${formatValue(totalValue + tax)}</span>
      </Total>
    </ValuesFormattedContainer>
  )
}
