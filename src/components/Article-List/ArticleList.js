/*
* Article List Presentation Component
*
* Renders the list of returned actions, performs page navigation on results.
*
* */
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PageNavigation from '../Page-Navigation/PageNavigationContainer';
import LoaderHOC from '../HOC/LoadingHOC';

const ArticleList = ({ list }) => (
  <div>
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
  </div>
);

ArticleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default LoaderHOC('list', 'loading')(ArticleList);
