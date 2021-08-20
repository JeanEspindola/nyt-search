import Header from './Header/Header'
import MainRoutes from './Main-Routes/MainRoutes'
import { Language, LanguageIntlProvider } from '../config/Language'

const App = () => {
  return (
    <Language>
      <LanguageIntlProvider>
        <Header />
        <MainRoutes />
      </LanguageIntlProvider>
    </Language>
  )
}

export default App
