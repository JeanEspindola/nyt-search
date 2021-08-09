/*
* App
*
* Initialize the UI rendering the Header and the MainrRoutes where the rest of
* application will be rendered based on the route.
*
* */
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import { translationMessages } from '../locales';
import Header from './Header/Header';
import MainRoutes from './Main-Routes/MainRoutes';

const App = () => {
  return (
    <IntlProvider
      key="en"
      locale="en"
      defaultLocale="en"
      messages={translationMessages['en']}
    >
      <Header />
      <MainRoutes />
    </IntlProvider>
  );
}

export default App;
