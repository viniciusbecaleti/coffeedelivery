import { ShoppingCart } from 'phosphor-react'
import { toast } from 'react-toastify'

import {
  AddToCartButton,
  AmountAndCart,
  CoffeeContainer,
  PriceAndAddToCard,
} from './styles'

import { AmountController } from '../../../../components/AmountController'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatValue } from '../../../../utils/formatValue'

interface CoffeeItemProps {
  data: {
    id: number
    url_image: string
    tags: string[]
    name: string
    description: string
    value: number
  }
}

export function CoffeeItem({ data }: CoffeeItemProps) {
  const [amount, setAmount] = useState(1)

  const { addSelectedCoffee } = useContext(CartContext)

  function increaseAmount() {
    if (amount < 99) {
      setAmount((prevAmount) => prevAmount + 1)
    }
  }

  function decreaseAmount() {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1)
    }
  }

  function handleAddCoffeeOnCart() {
    const selectedCoffee = {
      id: data.id,
      url_image: data.url_image,
      name: data.name,
      value: data.value,
      amount,
    }

    toast.success(`${amount}x ${data.name} adicionado ao carrinho!`, {
      position: toast.POSITION.TOP_RIGHT,
    })

    addSelectedCoffee(selectedCoffee)
  }

  return (
    <CoffeeContainer>
      <img src={data.url_image} alt="" />

      <ul>
        {data.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <h3>{data.name}</h3>

      <p>{data.description}</p>

      <PriceAndAddToCard>
        <strong>
          R$<span>{formatValue(data.value)}</span>
        </strong>

        <AmountAndCart>
          <AmountController
            amount={amount}
            onIncreaseAmount={increaseAmount}
            onDecreaseAmount={decreaseAmount}
          />

          <AddToCartButton type="button" onClick={handleAddCoffeeOnCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </AmountAndCart>
      </PriceAndAddToCard>
    </CoffeeContainer>
  )
}
