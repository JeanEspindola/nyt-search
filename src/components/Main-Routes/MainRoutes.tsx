/*
* MainRoutes Presentation Component
*
* It provides the switch to display the configured routes components.
*
* */
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import ArticleDetail from '../Article-Detail/ArticleDetail';
import styles from './MainRoutes.module.scss';

const MainRoutes = () => (
  <main className={styles.container}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={ArticleDetail} />
    </Switch>
  </main>
);

export default MainRoutes;
