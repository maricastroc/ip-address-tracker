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

  useEffect(() => {
    const getGeolocationByIP = async function (ip: string) {
      const response = await axios.get(`http://ip-api.com/json/${ip}`)

      if (response.data.status !== 'fail') {
        const results = {
          ipAddress: response.data.query,
          country: response.data.countryCode,
          region: response.data.regionName,
          city: response.data.city,
          zip: response.data.zip,
          timezone: response.data.timezone,
          latitude: response.data.lat,
          longitude: response.data.lon,
          isp: response.data.isp,
        }
        console.log(response.data)

        handleSetIpResults(results)
      } else {
        const results = {
          ipAddress: '192.212.174.101',
          country: 'US',
          region: 'California',
          city: 'California',
          zip: '91770',
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
