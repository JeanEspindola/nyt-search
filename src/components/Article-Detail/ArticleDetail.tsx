import * as Icon from '@material-ui/icons'
import { useLocation } from 'react-router'
import { useHistory } from 'react-router-dom'
import Moment from 'moment'
import styles from './ArticleDetail.module.scss'
import { FormattedMessage } from 'react-intl'
import { Button, Link } from '@material-ui/core'

const isArticleEmpty = (article: Article) =>
  article === null || article === undefined || Object.keys(article).length === 0

interface Article {
  headline: {
    main: string
  }
  pubDate: string
  snippet: string
  webUrl: string
}

const ArticleDetail = () => {
  const history = useHistory()
  Moment.locale('de')

  const article = useLocation<{ article: Article }>().state?.article ?? ''

  const onReturnToList = () => {
    history.replace('/')
  }

  return (
    <>
      {isArticleEmpty(article) ? (
        <p>
          <FormattedMessage id={'noDetails'} />
        </p>
      ) : (
        <div className={styles.container}>
          <Button
            onClick={onReturnToList}
            className={styles.return}
            color="default"
            startIcon={<Icon.ChevronLeft />}>
            <FormattedMessage id={'goToResults'} />
          </Button>
          <div className={styles.title}>
            <h3>{article.headline.main}</h3>
          </div>
          <div className={styles.date}>{Moment(article.pubDate).format('DD.MM.YYYY')}</div>
          <div className={styles.text}>{article.snippet}</div>
          <div className={styles.link}>
            <Link
              href={article.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}>
              <FormattedMessage id={'readArticle'} />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default ArticleDetail
