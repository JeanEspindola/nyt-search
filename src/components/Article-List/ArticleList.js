import React from 'react';
import { ListGroup, ListGroupItem, Pager } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ArticleList = ({ list, page }) => {
  if (list.length === 0) {
    return (
      <p>There are no results to display.</p>
    );
  }

  return (
    <div>
      <h4>Results:</h4>
      <ListGroup>
        {
          list.map(item => <ListGroupItem href="#link1">{item.headline.main}</ListGroupItem>)
        }
      </ListGroup>
      <Pager>
        <Pager.Item disabled={page === 0} previous href="#">
          &larr; Previous Page
        </Pager.Item>
        <Pager.Item next href="#">
          Next Page &rarr;
        </Pager.Item>
      </Pager>
    </div>
  );
};

ArticleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  page: PropTypes.number.isRequired,
};

export default ArticleList;
