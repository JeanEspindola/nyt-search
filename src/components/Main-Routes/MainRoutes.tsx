import { Switch, Route } from 'react-router-dom'
import Home from '../../components/Home/Home'
import ArticleDetail from '../Article-Detail/ArticleDetail'
import styles from './MainRoutes.module.scss'

const MainRoutes = () => (
  <main className={styles.container}>
    <div className={styles.contents}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={ArticleDetail} />
      </Switch>
    </div>
  </main>
)

export default MainRoutes
