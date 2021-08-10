/*
 * Index
 *
 * Where the application is bootstrapped with router and provider.
 *
 * */
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import rootStore from './redux/rootStore'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = rootStore()

const Component = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(Component, document.getElementById('root') as HTMLElement)
registerServiceWorker()
