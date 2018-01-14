import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Pager, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.getNewValues = this.getNewValues.bind(this);
  }

  getNewValues(e) {
    const index = e.target.name;
    e.preventDefault();
    const page = index === 'next' ? this.props.page + 1 : this.props.page - 1;
    this.props.onQuerySearch(this.props.query, page);
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
            this.props.list.map(item => (
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
        <Pager>
          <Pager.Item
            previous
            disabled={this.props.page === 0}
            onClick={this.getNewValues}
            name="previous"
          >
            <Glyphicon glyph="chevron-left" />
            Previous Page
          </Pager.Item>
          <Pager.Item
            next
            onClick={this.getNewValues}
            name="next"
          >
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
