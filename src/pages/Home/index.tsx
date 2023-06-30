import { useEffect, useContext } from 'react'
import { Header } from '../../components/Header'
import { Map } from '../../components/Map'
import { Search } from '../../components/Search'
import { HomeContainer, StyledToastContainer } from './styles'
import axios from 'axios'
import { IpAddressContext } from '../../context/CheckoutIpAddress'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Footer } from '../../components/Footer/Footer'

const apiKey = 'at_mY5YVLbBcoZuQL6qlFvmH8O5RfV3w'

export function Home() {
  const { ip, handleSetIpResults } = useContext(IpAddressContext)

  const getGeolocationByIP = async (ip: string) => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`,
      )

      if (response.data) {
        const {
          ip: ipAddress,
          location: {
            country,
            region,
            timezone,
            lat: latitude,
            lng: longitude,
          },
          isp,
        } = response.data

        const results = {
          ipAddress,
          country,
          region,
          timezone,
          latitude,
          longitude,
          isp,
        }

        handleSetIpResults(results)
      }
    } catch (error) {
      const results = {
        ipAddress: '192.212.174.101',
        country: 'US',
        region: 'California',
        timezone: '-07:00',
        latitude: '34.0648',
        longitude: '-118.086',
        isp: 'Southern California Edison',
      }

      toast.error('IP not found')
      handleSetIpResults(results)
    }
  }

  useEffect(() => {
    getGeolocationByIP(ip)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ip])

  return (
    <HomeContainer>
      <Header />
      <Search />
      <Map />
      <StyledToastContainer position="top-right" autoClose={5000} />
      <Footer />
    </HomeContainer>
  )
}
