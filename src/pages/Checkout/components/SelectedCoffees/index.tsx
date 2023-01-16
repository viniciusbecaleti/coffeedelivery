import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import {
  AmountControllerAndRemoveButton,
  CoffeeContainer,
  CoffeeInfoAndController,
  RemoveButton,
} from './styles'

import { CartContext } from '../../../../contexts/CartContext'

import { AmountController } from '../../../../components/AmountController'
import { formatValue } from '../../../../utils/formatValue'

export function SelectedCoffees() {
  const { coffees, removeSelectedCoffee, increaseAmount, decreaseAmount } =
    useContext(CartContext)

  return (
    <>
      {coffees ? (
        coffees.map((coffee) => (
          <CoffeeContainer key={coffee.id}>
            <CoffeeInfoAndController>
              <img src={coffee.url_image} alt="" />

              <div>
                <span>{coffee.name}</span>
                <AmountControllerAndRemoveButton>
                  <AmountController
                    amount={coffee.amount}
                    onIncreaseAmount={() => increaseAmount(coffee.id)}
                    onDecreaseAmount={() => decreaseAmount(coffee.id)}
                  />
                  <RemoveButton
                    type="button"
                    onClick={() => removeSelectedCoffee(coffee.id)}
                  >
                    <Trash size={16} />
                    Remover
                  </RemoveButton>
                </AmountControllerAndRemoveButton>
              </div>
            </CoffeeInfoAndController>

            <strong>R${formatValue(coffee.value)}</strong>
          </CoffeeContainer>
        ))
      ) : (
        <p>Vazio</p>
      )}
    </>
  )
}
