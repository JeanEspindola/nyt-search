import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { configureStore } from './redux/rootStore'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Container } from '@material-ui/core'

const store = configureStore()

const Component = (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <App />
        <img
          src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354"
          alt="https://developer.nytimes.com"
        />
      </Container>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(Component, document.getElementById('root') as HTMLElement)
registerServiceWorker()
