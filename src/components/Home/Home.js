/*
* Home Presentation Component
*
* Displays the basic components for searching and list of articles.
*
* */
import React, { Fragment } from 'react';
import SearchInput from '../Search-Input/SearchInputContainer';
import ArticleList from '../Article-List/ArticleListContainer';

const Home = () => (
  <Fragment>
    <SearchInput />
    <ArticleList />
  </Fragment>
);

export default Home;
