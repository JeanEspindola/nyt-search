import * as Icon from '@material-ui/icons'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import styles from './ArticleDetail.module.scss'
import { FormattedMessage } from 'react-intl'

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
  Moment.locale('de')

  const article = useLocation<{ article: Article }>().state?.article ?? ''

  return (
    <>
      {isArticleEmpty(article) ? (
        <p>
          <FormattedMessage id={'noDetails'} />
        </p>
      ) : (
        <div className={styles.container}>
          <div className={styles.return}>
            <Link to="/">
              <Icon.ChevronLeft />
              <FormattedMessage id={'goToResults'} />
            </Link>
          </div>
          <div className={styles.title}>
            <h3>{article.headline.main}</h3>
          </div>
          <div className={styles.date}>{Moment(article.pubDate).format('DD.MM.YYYY')}</div>
          <div className={styles.text}>{article.snippet}</div>
          <div className={styles.link}>
            <a target="_blank" href={article.webUrl} rel="noopener noreferrer">
              <FormattedMessage id={'readArticle'} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default ArticleDetail
