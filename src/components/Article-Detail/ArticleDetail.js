/*
* Article Detail Presentation Component
*
* Renders the detailed list. Using moment library to format dates.
* Using Link to make sure to call parant route.
*
* */
import React, { Component } from 'react';
import { Row, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import Moment from 'moment';
import PropTypes from 'prop-types';
import './ArticleDetail.css';
import NoArticle from '../Screens/NoArticle';
import WithLocale from '../HOC/WithLocale';
import WithCondition from '../HOC/WithCondition';

const isArticleEmpty = props => (
  props.location.article === null || props.location.article === undefined
);

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.location.article,
    };
    Moment.locale('de');
  }

  render() {
    const { article } = this.state;

    return (
      <div className="Detail">
        <Row className="Detail__Return">
          <Link to="/" >
            <Glyphicon glyph="chevron-left" />
            {this.props.locale.go_to_results}
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
            {this.props.locale.read_article}
          </a>
        </Row>
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  locale: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WithConditionalRendering = compose(
  WithLocale,
  WithCondition(isArticleEmpty, <NoArticle />),
);

export default WithConditionalRendering(ArticleDetail);
