// @ts-ignore
import ReactCountryFlag from 'react-country-flag'
import { useIntl } from 'react-intl'

const BRFlag = () => {
  const intl = useIntl()
  const message = intl.formatMessage({ id: 'portuguese' })
  return (
    <ReactCountryFlag
      className="emojiFlag"
      countryCode="BR"
      style={{
        fontSize: '2em',
      }}
      alt={message}
      title={message}
    />
  )
}

export default BRFlag
