import React from 'react';
import './App.css';
import Header from './Header/Header';
import SearchInput from './Search-Input/SearchInputContainer';

const App = () => (
  <div className="App">
    <Header />
    <div className="App__Body">
      <SearchInput />
    </div>
  </div>
);

export default App;
