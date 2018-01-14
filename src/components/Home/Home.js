/*
* Home Presentation Component
*
* Displays the basic components for searching and list of articles.
*
* */
import React from 'react';
import SearchInput from '../Search-Input/SearchInputContainer';
import ArticleList from '../Article-List/ArticleListContainer';

const Home = () => (
  <div className="Home">
    <SearchInput />
    <ArticleList />
  </div>
);

export default Home;
