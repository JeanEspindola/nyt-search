// @ts-ignore
import ReactCountryFlag from 'react-country-flag'
import { useIntl } from 'react-intl'

const USAFlag = () => {
  const intl = useIntl()
  const message = intl.formatMessage({ id: 'english' })
  return (
    <ReactCountryFlag
      className="emojiFlag"
      countryCode="US"
      style={{
        fontSize: '2em',
      }}
      alt={message}
      title={message}
    />
  )
}

export default USAFlag
