import { useEffect, useContext } from 'react'
import { Header } from '../../components/Header'
import { Map } from '../../components/Map'
import { Search } from '../../components/Search'
import { HomeContainer, StyledToastContainer } from './styles'
import axios from 'axios'
import { IpAddressContext } from '../../context/CheckoutIpAddress'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

export function Home() {
  const { ip, handleSetIpResults } = useContext(IpAddressContext)

  const apiKey = 'at_mY5YVLbBcoZuQL6qlFvmH8O5RfV3w'

  useEffect(() => {
    const getGeolocationByIP = async function (ip: string) {
      const response = await axios.get(`
      https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)

      if (response.data) {
        const results = {
          ipAddress: response.data.ip,
          country: response.data.location.country,
          region: response.data.location.region,
          timezone: response.data.location.timezone,
          latitude: response.data.location.lat,
          longitude: response.data.location.lng,
          isp: response.data.isp,
        }
        console.log(response.data)

        handleSetIpResults(results)
      } else {
        const results = {
          ipAddress: '192.212.174.101',
          country: 'US',
          region: 'California',
          timezone: 'America/Los_Angeles',
          latitude: '34.0648',
          longitude: '-118.086',
          isp: 'Southern California Edison',
        }
        toast.error('IP not found')
        handleSetIpResults(results)
      }
    }

    getGeolocationByIP(ip)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ip])

  return (
    <HomeContainer>
      <Header />
      <Search />
      <Map />
      <StyledToastContainer position="top-right" autoClose={5000} />
    </HomeContainer>
  )
}
