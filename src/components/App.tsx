import Header from './Header/Header'
import MainRoutes from './Main-Routes/MainRoutes'
import { Container } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Container>
      <Header />
      <MainRoutes />
    </Container>
  )
}

export default App
