import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CaretRight } from 'phosphor-react'
import { IpAddressContext } from '../../context/CheckoutIpAddress'
import {
  Input,
  ResultItem,
  ResultsContainer,
  SearchBarContainer,
  SubmitButton,
  SearchContainer,
  Separator,
} from './styles'

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

  function filterWords(allWords: string) {
    if (allWords !== undefined && allWords !== null) {
      const words = allWords.split(' ')
      const twoWords = words.slice(0, 2)
      const finalWord = twoWords.join(' ')
      return finalWord
    }
  }

  return (
    <SearchContainer>
      <SearchBarContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Digit an IP"
          title="An IPv4 address must contain three periods and four octets."
          required
          pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$"
          {...register('ipAddress', { required: true })}
        />
        <SubmitButton type="submit">
          <CaretRight size={24} />
        </SubmitButton>
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
            <strong>{filterWords(ipResults?.isp)}</strong>
          </ResultItem>
        </ResultsContainer>
      )}
    </SearchContainer>
  )
}
