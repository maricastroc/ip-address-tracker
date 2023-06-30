import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const StyledMapContainer = styled(MapContainer)`
  height: 525px;
  margin-top: -11rem;
  z-index: 1;

  @media (min-width: 980px) {
    margin-top: -11rem;
  }

  @media (min-width: 1200px) {
    margin-top: -7rem;
  }
`
