/*
* MainRoutes Presentation Component
*
* It provides the switch to display the configured routes components.
*
* */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import ArticleDetail from '../Article-Detail/ArticleDetail';
import './MainRoutes.css';

const MainRoutes = () => (
  <main className="Main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={ArticleDetail} />
    </Switch>
  </main>
);

export default MainRoutes;
