import Header from './Header/Header'
import MainRoutes from './Main-Routes/MainRoutes'
import { Container } from '@material-ui/core'

const App = () => {
  return (
    <Container>
      <Header />
      <MainRoutes />
    </Container>
  )
}

export default App
