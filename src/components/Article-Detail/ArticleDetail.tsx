/*
 * Article Detail Presentation Component
 *
 * Renders the detailed list. Using moment library to format dates.
 * Using Link to make sure to call parent route.
 *
 * */
import { useLocation } from 'react-router'
import { Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
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
  pub_date: string
  snippet: string
  web_url: string
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
          <Row className={styles.return}>
            <Link to="/">
              <Icon.ChevronLeft />
              <FormattedMessage id={'goToResults'} />
            </Link>
          </Row>
          <Row className={styles.title}>
            <h3>{article.headline.main}</h3>
          </Row>
          <Row className={styles.date}>
            {Moment(article.pub_date).format('DD.MM.YYYY')}
          </Row>
          <Row className={styles.text}>{article.snippet}</Row>
          <Row className={styles.link}>
            <a target="_blank" href={article.web_url} rel="noopener noreferrer">
              <FormattedMessage id={'readArticle'} />
            </a>
          </Row>
        </div>
      )}
    </>
  )
}

export default ArticleDetail
