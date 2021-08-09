/*
* Article Detail Presentation Component
*
* Renders the detailed list. Using moment library to format dates.
* Using Link to make sure to call parant route.
*
* */
import { useLocation } from 'react-router'
import { Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import Moment from 'moment';
import './ArticleDetail.css';
import { FormattedMessage } from 'react-intl'

const isArticleEmpty = (article: Article) => (
  article === null || article === undefined
);

interface Article {
  headline: {
    main: string,
  }
  pub_date: string
  snippet: string
  web_url: string
}

const ArticleDetail = () => {
  Moment.locale('de');

  const article = useLocation<{ article: Article }>().state?.article ?? '';

  return (
    <>
      {isArticleEmpty(article) ? (
        <p>
          <FormattedMessage id={'noDetails'} />
        </p>
      ) : (
        <div className="Detail">
          <Row className="Detail__Return">
            <Link to="/" >
              <Icon.ChevronLeft />
              <FormattedMessage id={'goToResults'} />
            </Link>
          </Row>
          <Row className="Detail__Title">
            <h3>{article.headline.main}</h3>
          </Row>
          <Row className="Detail__Date">
            {Moment(article.pub_date).format('DD.MM.YYYY')}
          </Row>
          <Row className="Detail__Text">
            {article.snippet}
          </Row>
          <Row className="Detail__Link">
            <a target="_blank" href={article.web_url}>
              <FormattedMessage id={'readArticle'} />
            </a>
          </Row>
        </div>
      )}
    </>
  );
}

export default ArticleDetail;
