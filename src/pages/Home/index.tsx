import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  HomeContainer,
  HomeHeader,
  ListBenefit,
  ListCoffee,
  OurCoffees,
} from './styles'

import coffee from '../../assets/coffee.png'

import { CoffeeItem } from './components/CoffeeItem'

import { listCoffee } from '../../data.js'

import { InfoWithIcon } from '../../components/InfoWithIcon'

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
              <InfoWithIcon
                icon={<ShoppingCart size={16} weight="fill" />}
                info="Compra simples e segura"
                varientColor="orange"
              />

              <InfoWithIcon
                icon={<Package size={16} weight="fill" />}
                info="Embalagem mantém o café intacto"
                varientColor="gray"
              />

              <InfoWithIcon
                icon={<Timer size={16} weight="fill" />}
                info="Entrega rápida e rastreada"
                varientColor="yellow"
              />

              <InfoWithIcon
                icon={<Coffee size={16} weight="fill" />}
                info="O café chega fresquinho até você"
                varientColor="purple"
              />
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
