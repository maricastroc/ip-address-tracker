import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme['base-white']};
  background-color: ${(props) => props.theme['gray-800']};
  padding: 1rem;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme['base-white']};
  }

  a {
    color: ${(props) => props.theme['base-white']};

    &:hover {
      opacity: 0.8;
      transition: 200ms;
    }
  }
`
