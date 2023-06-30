import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${(props) => props.theme['base-white']};
    color: ${(props) => props.theme['error-color']};
    border-radius: 4px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
  }

  .Toastify__toast-body svg {
    fill: ${(props) => props.theme['error-color']};
  }

  .Toastify__progress-bar {
    background-color: ${(props) => props.theme['error-color']};
  }
`

export const HomeContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`
