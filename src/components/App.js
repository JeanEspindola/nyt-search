/*
* App
*
* Initialize the UI rendering the Header and the MainrRoutes where the rest of
* application will be rendered based on the route.
*
* */
import React from 'react';
import Header from './Header/Header';
import MainRoutes from './Main-Routes/MainRoutes';

const App = () => (
  <div className="App">
    <Header />
    <MainRoutes />
  </div>
);

export default App;
