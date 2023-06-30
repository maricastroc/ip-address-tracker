import styled from 'styled-components'

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.85rem auto;
  padding: 0 1.5rem;
  margin-top: -17rem;
  width: 100%;
`

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 3.625rem;

  @media (min-width: 480px) {
    max-width: 35rem;
  }
`

export const Input = styled.input`
  display: flex;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${(props) => props.theme['base-white']};
  font-size: 1.125rem;
  border: 2px solid ${(props) => props.theme['base-white']};
  width: 80%;
  flex-grow: 1;
  padding: 1.125rem 1.5rem;

  &:focus {
    box-shadow: none;
  }
`

export const SearchButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 2px solid ${(props) => props.theme['base-black']};
  background-color: ${(props) => props.theme['base-black']};
  width: 20%;
  max-width: 4rem;

  svg {
    color: ${(props) => props.theme['base-white']};
    z-index: 10;
  }
`

export const ResultsContainer = styled.div`
  background-color: ${(props) => props.theme['base-white']};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 12px;
  z-index: 10;

  @media (min-width: 480px) {
    max-width: 35rem;
  }

  @media (min-width: 1200px) {
    max-width: 1100px;
    flex-direction: row;
    padding: 2.5rem;
  }
`

export const ResultItem = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 0.7rem;
    color: ${(props) => props.theme['gray-500']};
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media (min-width: 1200px) {
    text-align: left;
    width: 30%;

    p {
      font-size: 0.75rem;
    }

    strong {
      font-size: 1.625rem;
    }
  }
`

export const Separator = styled.span`
  display: none;
  width: 1px;
  height: 80px;
  background-color: ${(props) => props.theme['gray-300']};

  @media (min-width: 1200px) {
    display: flex;
  }
`
