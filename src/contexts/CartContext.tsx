import { createContext, ReactNode, useState } from 'react'

export interface CoffeeProps {
  id: number
  url_image: string
  name: string
  value: number
  amount: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  coffees: CoffeeProps[]
  totalItems: number
  totalValue: number
  addSelectedCoffee: (data: CoffeeProps) => void
  removeSelectedCoffee: (id: number) => void
  increaseAmount: (id: number) => void
  decreaseAmount: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  const totalItems = coffees.reduce((accumulator, current) => {
    return accumulator + current.amount
  }, 0)

  const totalValue = coffees.reduce((accumulator, current) => {
    return accumulator + current.value * current.amount
  }, 0)

  function addSelectedCoffee(data: CoffeeProps) {
    const coffeeAlreadySelected = coffees.find(
      (coffee) => coffee.id === data.id,
    )

    if (coffeeAlreadySelected) {
      setCoffees((prevCoffee) =>
        prevCoffee.map((coffee) => {
          if (coffee.id === data.id) {
            return {
              ...coffee,
              amount: coffee.amount + data.amount,
            }
          }

          return coffee
        }),
      )
    } else {
      setCoffees((prevCoffee) => [data, ...prevCoffee])
    }
  }

  function removeSelectedCoffee(id: number) {
    setCoffees((prevCoffees) =>
      prevCoffees.filter((coffee) => coffee.id !== id),
    )
  }

  function increaseAmount(id: number) {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) => {
        if (coffee.id === id) {
          if (coffee.amount < 99) {
            return {
              ...coffee,
              amount: coffee.amount + 1,
            }
          }
        }

        return coffee
      }),
    )
  }

  function decreaseAmount(id: number) {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) => {
        if (coffee.id === id) {
          if (coffee.amount > 1) {
            return {
              ...coffee,
              amount: coffee.amount - 1,
            }
          }
        }

        return coffee
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        totalItems,
        totalValue,
        addSelectedCoffee,
        removeSelectedCoffee,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
