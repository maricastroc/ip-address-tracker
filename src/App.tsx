import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { IpAddressProvider } from './context/CheckoutIpAddress'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IpAddressProvider>
        <Home />
      </IpAddressProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
