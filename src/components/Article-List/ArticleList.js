import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Pager, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.getNextPage = this.getNextPage.bind(this);
    this.getPreviousPage = this.getPreviousPage.bind(this);
  }

  getNextPage(e) {
    e.preventDefault();
    this.props.onQuerySearch(this.props.query, this.props.page + 1);
  }

  getPreviousPage(e) {
    e.preventDefault();
    this.props.onQuerySearch(this.props.query, this.props.page - 1);
  }

  render() {
    if (this.props.list.length === 0) {
      return (
        <p>There are no results to display.</p>
      );
    }

    return (
      <div>
        <h4>Results:</h4>
        <ListGroup>
          {
            this.props.list.map(item =>
              <ListGroupItem href="#link1">{item.headline.main}</ListGroupItem>)
          }
        </ListGroup>
        <Pager>
          <Pager.Item disabled={this.props.page === 0} previous onClick={this.getPreviousPage}>
            <Glyphicon glyph="chevron-left" />
            Previous Page
          </Pager.Item>
          <Pager.Item next onClick={this.getNextPage}>
            Next Page
            <Glyphicon glyph="chevron-right" />
          </Pager.Item>
        </Pager>
      </div>
    );
  }
}

ArticleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  onQuerySearch: PropTypes.func.isRequired,
};

export default ArticleList;
