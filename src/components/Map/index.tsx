import { useState, useContext, useEffect } from 'react'
import { TileLayer, Marker, Popup } from 'react-leaflet'
import { StyledMapContainer } from './styles'
import { IpAddressContext } from '../../context/CheckoutIpAddress'
import L from 'leaflet'

type Coordinates = {
  latitude: number
  longitude: number
}

const customIcon = L.icon({
  iconUrl: '../assets/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [0, 0],
})

function DynamicMap({ coordinates }: { coordinates: Coordinates }) {
  return (
    <StyledMapContainer
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={13}
      zoomControl={false}
      key={`${coordinates.latitude}-${coordinates.longitude}`}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={[coordinates.latitude, coordinates.longitude]}
        icon={customIcon}
      >
        <Popup>
          Another marker popup. <br /> Customizable content.
        </Popup>
      </Marker>
    </StyledMapContainer>
  )
}

export function Map() {
  const { ipResults } = useContext(IpAddressContext)
  const [cityCoordinates, setCityCoordinates] = useState<Coordinates>({
    latitude: -6.04167,
    longitude: -38.45972,
  })

  useEffect(() => {
    const updateCityCoordinates = (latitude: number, longitude: number) => {
      setCityCoordinates({ latitude, longitude })
    }

    if (ipResults?.latitude && ipResults?.longitude) {
      updateCityCoordinates(
        parseFloat(ipResults.latitude),
        parseFloat(ipResults.longitude),
      )
    }
  }, [ipResults])

  return cityCoordinates && <DynamicMap coordinates={cityCoordinates} />
}
