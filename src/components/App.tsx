import Header from './Header/Header'
import MainRoutes from './Main-Routes/MainRoutes'
import { Container } from '@material-ui/core'
import Logo from './UI/Logo/Logo'

const App = () => {
  return (
    <Container>
      <Header />
      <MainRoutes />
      <Logo
        src={'https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354'}
      />
    </Container>
  )
}

export default App
