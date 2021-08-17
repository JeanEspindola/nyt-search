// @ts-ignore
import ReactCountryFlag from 'react-country-flag'

const USAFlag = () => {
  return (
    <ReactCountryFlag
      className="emojiFlag"
      countryCode="US"
      style={{
        fontSize: '2em',
      }}
      alt="English"
      title="English"
    />
  )
}

export default USAFlag
