import React from 'react'
import { useHistory } from 'react-router-dom'
import PageNavigation from '../Page-Navigation/PageNavigation'
import Loading from '../UI/Loading/Loading'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../redux/rootTypes'
import { FormattedMessage } from 'react-intl'
import styles from './ArticleList.module.scss'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { EnhancedArticle } from '../../redux/articleSearch/articleSearchTypes'

const ArticleList = () => {
  const history = useHistory()

  const { list, loading } = useSelector((state: RootStateType) => state.articleList)
  let component: React.ReactNode

  const onClickArticleListItem = (article: EnhancedArticle) => {
    history.push('/detail', { article })
  }

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
        <List>
          {list.map(item => (
            <ListItem
              button
              key={item.id}
              className={styles.listItem}
              onClick={() => onClickArticleListItem(item)}>
              <ListItemText primary={item.headline.main} />
            </ListItem>
          ))}
        </List>
        <PageNavigation />
      </>
    )
  }

  return <React.Fragment>{component}</React.Fragment>
}

export default ArticleList
