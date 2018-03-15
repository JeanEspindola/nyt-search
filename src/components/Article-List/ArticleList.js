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
import WithCondition from '../HOC/WithCondition';
import WithLocale from '../HOC/WithLocale';
import EmptyList from '../Screens/EmptyList';
import Loading from '../Screens/Loading';

const isEmpty = props => (
  props.list === null || props.list === undefined || props.list.length === 0
);

const isLoading = props => (
  props.loading
);

const ArticleList = ({ list, locale }) => (
  <Fragment>
    <h4>{locale.results}</h4>
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
  locale: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WithConditionalRendering = compose(
  WithLocale,
  WithCondition(isLoading, <Loading />),
  WithCondition(isEmpty, <EmptyList />),
);

export default WithConditionalRendering(ArticleList);
