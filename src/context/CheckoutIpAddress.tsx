import { createContext, ReactNode, useState } from 'react'

interface IpResultsData {
  ipAddress: string
  country: string
  region: string
  timezone: string
  latitude: string
  longitude: string
  isp: string
}

interface IpAddressContextData {
  ip: string
  handleSetIp: (id: string) => void
  ipResults: IpResultsData | undefined
  handleSetIpResults: (ipResults: IpResultsData) => void
}

export const IpAddressContext = createContext<IpAddressContextData>(
  {} as IpAddressContextData,
)

interface IpAddressProviderProps {
  children: ReactNode
}

export function IpAddressProvider({ children }: IpAddressProviderProps) {
  const [ip, setIp] = useState('192.212.174.101')
  const [ipResults, setIpResults] = useState<IpResultsData>()

  function handleSetIp(ip: string) {
    setIp(ip)
  }

  function handleSetIpResults(ipResults: IpResultsData) {
    setIpResults(ipResults)
  }

  const IpAddress: IpAddressContextData = {
    ip,
    handleSetIp,
    ipResults,
    handleSetIpResults,
  }

  return (
    <IpAddressContext.Provider value={IpAddress}>
      {children}
    </IpAddressContext.Provider>
  )
}
