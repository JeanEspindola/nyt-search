import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import MainRoutes from './Main-Routes/MainRoutes'
import { LanguageIntlProvider } from '../config/Language'

const App = () => {
  return (
    <LanguageIntlProvider>
      <Header />
      <MainRoutes />
    </LanguageIntlProvider>
  )
}

export default App
