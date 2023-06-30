import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['base-white']};
    border-radius: 4px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
  }

  .Toastify__close-button {
    color: ${(props) => props.theme['base-white']};
  }

  .Toastify__toast-body svg {
    fill: ${(props) => props.theme['base-white']};
  }

  .Toastify__progress-bar {
    background-color: ${(props) => props.theme['base-white']};
  }
`

export const HomeContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`
