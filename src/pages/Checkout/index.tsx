import { useContext } from 'react'
import { CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

import {
  AddressAndPaymentMethod,
  CheckoutButton,
  CheckoutContainer,
  ContentCheckout,
  ContentForm,
  ContentPaymentMethod,
  EmptyCart,
  InputRadioContainer,
  SelectedCoffeesAndCheckout,
} from './styles'

import { FormHeader } from './components/FormHeader'
import { SelectedCoffees } from './components/SelectedCoffees'
import { ValuesFormatted } from './components/ValuesFormatted'

import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { coffees } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <div className="content">
        <AddressAndPaymentMethod>
          <h1>Complete seu pedido</h1>

          <ContentForm>
            <FormHeader
              icon={<MapPinLine size={22} color="#C47F17" />}
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
            />

            <form id="checkoutForm">
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </form>
          </ContentForm>

          <ContentPaymentMethod>
            <FormHeader
              icon={<CurrencyDollar size={22} color="#8047F8" />}
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
            />

            <InputRadioContainer>
              <div>
                <input type="radio" name="paymentMethod" id="creditCar" />
                <label htmlFor="creditCar">
                  <Money size={16} />
                  Cartão de Crédito
                </label>
              </div>

              <div>
                <input type="radio" name="paymentMethod" id="debitCar" />
                <label htmlFor="debitCar">
                  <Money size={16} />
                  Cartão de Débito
                </label>
              </div>

              <div>
                <input type="radio" name="paymentMethod" id="money" />
                <label htmlFor="money">
                  <Money size={16} />
                  Dinheiro
                </label>
              </div>
            </InputRadioContainer>
          </ContentPaymentMethod>
        </AddressAndPaymentMethod>

        <SelectedCoffeesAndCheckout>
          <h2>Cafés selecionados</h2>

          <ContentCheckout>
            {coffees.length === 0 ? (
              <EmptyCart>O carrinho está vazio!</EmptyCart>
            ) : (
              <>
                <SelectedCoffees />
                <ValuesFormatted />
                <CheckoutButton type="submit" form="checkoutForm">
                  Confirmar Pedido
                </CheckoutButton>
              </>
            )}
          </ContentCheckout>
        </SelectedCoffeesAndCheckout>
      </div>
    </CheckoutContainer>
  )
}
