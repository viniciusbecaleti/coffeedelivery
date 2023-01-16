import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { CartItem, HeaderContainer, NavbarContainer } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <NavbarContainer>
          <span>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </span>
          <NavLink to="/checkout">
            <CartItem>3</CartItem>
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </NavbarContainer>
      </div>
    </HeaderContainer>
  )
}
