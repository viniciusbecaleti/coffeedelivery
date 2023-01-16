import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartButton,
  AmountAndCart,
  AmountContainer,
  CoffeeContainer,
  PriceAndAddToCard,
} from './styles'

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
          R$ <span>9,90</span>
        </strong>
        <AmountAndCart>
          <AmountContainer>
            <button type="button">
              <Minus size={14} weight="fill" />
            </button>
            <span>1</span>
            <button type="button">
              <Plus size={14} weight="fill" />
            </button>
          </AmountContainer>

          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </AmountAndCart>
      </PriceAndAddToCard>
    </CoffeeContainer>
  )
}
