import { Minus, Plus } from 'phosphor-react'

import { AmountContainer } from './styles'

interface AmountControllerProps {
  amount: number
  onIncreaseAmount: () => void
  onDecreaseAmount: () => void
}

export function AmountController({
  amount,
  onIncreaseAmount,
  onDecreaseAmount,
}: AmountControllerProps) {
  return (
    <AmountContainer>
      <button type="button" onClick={onDecreaseAmount}>
        <Minus size={14} weight="fill" />
      </button>

      <span>{amount}</span>

      <button type="button" onClick={onIncreaseAmount}>
        <Plus size={14} weight="fill" />
      </button>
    </AmountContainer>
  )
}
