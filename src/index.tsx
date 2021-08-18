import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { configureStore } from './redux/rootStore'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Language } from './config/Language'

const store = configureStore()

const Component = (
  <Provider store={store}>
    <Language>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Language>
  </Provider>
)

ReactDOM.render(Component, document.getElementById('root') as HTMLElement)
registerServiceWorker()
