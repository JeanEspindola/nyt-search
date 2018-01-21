import React, { Component } from 'react';
import { Pager, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PageNavigation extends Component {
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
    return (
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
    );
  }
}

PageNavigation.propTypes = {
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  onQuerySearch: PropTypes.func.isRequired,
};

export default PageNavigation;
