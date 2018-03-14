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
import Moment from 'moment';
import PropTypes from 'prop-types';
import './ArticleDetail.css';
import WithLocale from '../HOC/WithLocale';

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
    if (article === undefined) {
      return <p>{this.props.locale.no_details}</p>;
    }

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

export default WithLocale(ArticleDetail);

