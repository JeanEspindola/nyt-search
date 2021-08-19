import React, { createContext, useContext, useState } from 'react'
import { translationMessages } from '../locales'
import { IntlProvider } from 'react-intl'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import USAFlag from '../components/UI/Flags/USAFlag'
import BRFlag from '../components/UI/Flags/BRFlag'
import styles from './Language.module.scss'

interface LanguageContextType {
  locale: string
  setLocale: (value: string) => void
}

const LanguageContext = createContext({})

const Language = (props: React.PropsWithChildren<{}>) => {
  const [locale, setLocale] = useState('en')

  return <LanguageContext.Provider value={{ locale, setLocale }} {...props} />
}

const LanguageIntlProvider: React.FC<{}> = ({ children }) => {
  const { locale } = useContext(LanguageContext) as LanguageContextType

  return (
    <IntlProvider
      key={locale}
      locale={locale}
      defaultLocale={locale}
      messages={translationMessages[locale]}>
      {children}
    </IntlProvider>
  )
}

const LanguageDropdownSelector = () => {
  const { locale, setLocale } = useContext(LanguageContext) as LanguageContextType

  const onSetPreferredLanguage = (event: React.BaseSyntheticEvent) => {
    setLocale(event.target.value)
  }

  return (
    <FormControl variant="standard" className={styles.formControl}>
      <Select value={locale} onChange={onSetPreferredLanguage}>
        <MenuItem value="en">
          <USAFlag />
        </MenuItem>
        <MenuItem value="pt-br">
          <BRFlag />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export { Language, LanguageIntlProvider, LanguageDropdownSelector }
