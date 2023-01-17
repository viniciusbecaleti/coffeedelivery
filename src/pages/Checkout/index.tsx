import { useContext } from 'react'
import { CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

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

const checkoutFormSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().min(1),
  district: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(1),
  paymentMethod: zod.string().min(1),
})

type checkoutFormSchemaData = zod.infer<typeof checkoutFormSchema>

export function Checkout() {
  const { coffees } = useContext(CartContext)

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<checkoutFormSchemaData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentMethod: '',
    },
  })

  function handleNewRequest(data: checkoutFormSchemaData) {
    const newRequest = {
      form: data,
      coffees,
    }

    navigate('/success', { state: newRequest })
  }

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

            <form id="checkoutForm" onSubmit={handleSubmit(handleNewRequest)}>
              <input type="text" placeholder="CEP" {...register('cep')} />
              <input type="text" placeholder="Rua" {...register('street')} />
              <input type="text" placeholder="Número" {...register('number')} />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <input
                type="text"
                placeholder="Bairro"
                {...register('district')}
              />
              <input type="text" placeholder="Cidade" {...register('city')} />
              <input type="text" placeholder="UF" {...register('uf')} />
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
                <input
                  type="radio"
                  id="creditCar"
                  value="Cartão de Crédito"
                  {...register('paymentMethod')}
                />
                <label htmlFor="creditCar">
                  <Money size={16} />
                  Cartão de Crédito
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="debitCar"
                  value="Cartão de Débito"
                  {...register('paymentMethod')}
                />
                <label htmlFor="debitCar">
                  <Money size={16} />
                  Cartão de Débito
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="money"
                  value="Dinheiro"
                  {...register('paymentMethod')}
                />
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
