import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  BenefitItem,
  HomeContainer,
  HomeHeader,
  ListBenefit,
  ListCoffee,
  OurCoffees,
} from './styles'

import coffee from '../../assets/coffee.png'

import { CoffeeItem } from './components/CoffeeItem'

import { listCoffee } from '../../data.js'

export function Home() {
  return (
    <>
      <HomeContainer>
        <div className="content">
          <HomeHeader>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ListBenefit>
              <BenefitItem varient="orange">
                <i>
                  <ShoppingCart size={16} weight="fill" />
                </i>
                Compra simples e segura
              </BenefitItem>
              <BenefitItem varient="gray">
                <i>
                  <Package size={16} weight="fill" />
                </i>
                Embalagem mantém o café intacto
              </BenefitItem>
              <BenefitItem varient="yellow">
                <i>
                  <Timer size={16} weight="fill" />
                </i>
                Entrega rápida e rastreada
              </BenefitItem>
              <BenefitItem varient="purple">
                <i>
                  <Coffee size={16} weight="fill" />
                </i>
                O café chega fresquinho até você
              </BenefitItem>
            </ListBenefit>
          </HomeHeader>

          <img src={coffee} alt="" />
        </div>
      </HomeContainer>

      <OurCoffees>
        <div className="content">
          <h2>Nossos cafés</h2>

          <ListCoffee>
            {listCoffee.map((coffee) => (
              <CoffeeItem key={coffee.id} data={coffee} />
            ))}
          </ListCoffee>
        </div>
      </OurCoffees>
    </>
  )
}
