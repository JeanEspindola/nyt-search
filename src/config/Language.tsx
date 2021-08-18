import React, { createContext, useContext, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { translationMessages } from '../locales'
import { IntlProvider } from 'react-intl'
import BRFlag from '../components/UI/Flags/BRFlag'
import USAFlag from '../components/UI/Flags/USAFlag'
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

  let component = <USAFlag />

  if (locale === 'pt-br') {
    component = <BRFlag />
  }

  const onSetPreferredLanguage = (newLocale: string) => {
    setLocale(newLocale)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle size="sm" className={styles.toggleButton}>
        {component}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.menu}>
        <Dropdown.Item
          onClick={() => onSetPreferredLanguage('en')}
          active={locale === 'en'}
          className={styles.menuItem}>
          <USAFlag />
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => onSetPreferredLanguage('pt-br')}
          active={locale === 'pt-br'}
          className={styles.menuItem}>
          <BRFlag />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export { Language, LanguageIntlProvider, LanguageDropdownSelector }
