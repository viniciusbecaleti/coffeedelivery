import { lightTheme } from '../styles/themes/lightTheme'

type LightType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends LightType {}
}
