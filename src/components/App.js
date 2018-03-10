/*
* App
*
* Initialize the UI rendering the Header and the MainrRoutes where the rest of
* application will be rendered based on the route.
*
* */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import MainRoutes from './Main-Routes/MainRoutes';
import en from '../locales/en.json';
import pt from '../locales/pt-br.json';

const locales = { en, pt };

class App extends Component {
  static childContextTypes = {
    locale: PropTypes.object,
  };

  getChildContext() {
    return {
      locale: locales.en,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainRoutes />
      </div>
    );
  }
}

export default App;
