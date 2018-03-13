/*
* Article List Presentation Component
*
* Renders the list of returned actions, performs page navigation on results.
*
* */
import React, { Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import PageNavigation from '../Page-Navigation/PageNavigationContainer';
import WithLoading from '../HOC/WithLoading';
import WithCondition from '../HOC/WithCondition';

const ArticleList = ({ list }) => (
  <Fragment>
    <h4>Results:</h4>
    <ListGroup>
      {
        list.map(item => (
          <ListGroupItem
            key={item.id}
          >
            <Link to={{
              pathname: '/detail',
              article: item,
            }}
            >
              {item.headline.main}
            </Link>
          </ListGroupItem>
        ))
      }
    </ListGroup>
    <PageNavigation />
  </Fragment>
);

ArticleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const WithConditionalRendering = compose(
  WithLoading('loading'),
  WithCondition('list'),
);

export default WithConditionalRendering(ArticleList);
