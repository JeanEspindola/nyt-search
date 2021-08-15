import React from 'react'
import { Link } from 'react-router-dom'
import PageNavigation from '../Page-Navigation/PageNavigation'
import Loading from '../../components/Screens/Loading'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../redux/rootTypes'
import { FormattedMessage } from 'react-intl'
import styles from './ArticleList.module.scss'

const ArticleList = () => {
  const { list, loading } = useSelector((state: RootStateType) => state.articleList)
  let component: React.ReactNode

  if (loading) {
    component = <Loading />
  } else if (list === null || list === undefined || list.length === 0) {
    component = (
      <p className={styles.noResults}>
        <FormattedMessage id={'noResults'} />
      </p>
    )
  } else {
    component = (
      <>
        <div className={styles.title}>
          <h4>
            <FormattedMessage id={'results'} />
          </h4>
        </div>
        {list.map(item => (
          <div key={item.id} className={styles.listItem}>
            <Link to={{ pathname: '/detail', state: { article: item } }}>{item.headline.main}</Link>
          </div>
        ))}
        <PageNavigation />
      </>
    )
  }

  return <React.Fragment>{component}</React.Fragment>
}

export default ArticleList
