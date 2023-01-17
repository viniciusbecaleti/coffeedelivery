import { useLocation } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { ConfirmedRequest, OrderDatails, SuccessContainer } from './styles'

import { InfoWithIcon } from '../../components/InfoWithIcon'

// import { CoffeeProps } from '../../contexts/CartContext'

import success from '../../assets/success.svg'

interface FormData {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  paymentMethod: string
}

interface DataType {
  form: FormData
  // coffees: CoffeeProps
}

export function Success() {
  const location = useLocation()
  const { form /* coffees */ }: DataType = location.state

  return (
    <SuccessContainer>
      <div className="content">
        <ConfirmedRequest>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <OrderDatails>
            <ul>
              <InfoWithIcon
                icon={<MapPin size={32} weight="fill" />}
                info={
                  <>
                    Entrega em{' '}
                    <b>
                      {form.street}, {form.number}
                    </b>{' '}
                    <br />
                    {form.district} - {form.city}, {form.uf}
                  </>
                }
                varientColor="purple"
              />

              <InfoWithIcon
                icon={<Timer size={32} weight="fill" />}
                info={
                  <>
                    Previsão de entrega <br /> <b>20 min - 30 min </b>
                  </>
                }
                varientColor="yellow"
              />

              <InfoWithIcon
                icon={<CurrencyDollar size={32} weight="fill" />}
                info={
                  <>
                    Pagamento na entrega <br /> <b>{form.paymentMethod}</b>
                  </>
                }
                varientColor="yellow"
              />
            </ul>
          </OrderDatails>
        </ConfirmedRequest>

        <img src={success} alt="" />
      </div>
    </SuccessContainer>
  )
}
