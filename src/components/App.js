import React from 'react';
import './App.css';
import Header from './Header/Header';
import SearchInput from './Search-Input/SearchInputContainer';
import ArticleList from './Article-List/ArticleListContainer';

const App = () => (
  <div className="App">
    <Header />
    <div className="App__Body">
      <SearchInput />
      <ArticleList />
    </div>
  </div>
);

export default App;
