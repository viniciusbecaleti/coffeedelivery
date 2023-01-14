import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <div className="container">
        <div className="content">
          <h1>Hello, world!</h1>
        </div>
      </div>
      <Outlet />
    </LayoutContainer>
  )
}
