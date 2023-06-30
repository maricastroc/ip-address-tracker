import { CaretRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  Input,
  ResultItem,
  ResultsContainer,
  SearchBarContainer,
  SearchButton,
  SearchContainer,
  Separator,
} from './styles'
import { useContext } from 'react'
import { IpAddressContext } from '../../context/CheckoutIpAddress'

interface FormData {
  ipAddress: string
}

export function Search() {
  const { handleSetIp, ipResults } = useContext(IpAddressContext)
  const { handleSubmit, register, reset } = useForm<FormData>()

  function onSubmit(data: FormData) {
    const { ipAddress } = data
    handleSetIp(ipAddress)
    reset()
  }

  return (
    <SearchContainer>
      <SearchBarContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Digit an IP"
          required
          pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$"
          {...register('ipAddress', { required: true })}
        />
        <SearchButton type="submit">
          <CaretRight size={24} />
        </SearchButton>
      </SearchBarContainer>
      {ipResults && (
        <ResultsContainer>
          <ResultItem>
            <p>IP Address</p>
            <strong>{ipResults?.ipAddress}</strong>
          </ResultItem>
          <Separator />
          <ResultItem>
            <p>Location</p>
            <strong>{`${ipResults?.region}, ${ipResults?.country}`}</strong>
          </ResultItem>
          <Separator />
          <ResultItem>
            <p>Timezone</p>
            <strong>{`UTC ${ipResults?.timezone}`}</strong>
          </ResultItem>
          <Separator />
          <ResultItem>
            <p>ISP</p>
            <strong>{ipResults?.isp}</strong>
          </ResultItem>
        </ResultsContainer>
      )}
    </SearchContainer>
  )
}
