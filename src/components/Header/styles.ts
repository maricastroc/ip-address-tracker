import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.8rem 1.5rem;
  background-image: url('./assets/pattern-bg-mobile.png');
  background-size: cover;
  background-position: center;
  height: 23.45rem;

  @media (min-width: 480px) {
    background-image: url('./assets/pattern-bg-desktop.png');
  }
`

export const Heading = styled.h2`
  font-size: 1.625rem;
  font-weight: 500;
  margin: 0 auto;
  color: ${(props) => props.theme['base-white']};

  @media (min-width: 680px) {
    font-size: 2rem;
  }
`
