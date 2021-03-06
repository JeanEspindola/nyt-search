/*
* Search Input Presentation Component
*
* Displays the search input bar. The search action is in onSubmit action.
*
* */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, InputGroup, Glyphicon, ControlLabel } from 'react-bootstrap';
import WithLocale from '../HOC/WithLocale';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.onChangeQuery = this.onChangeQuery.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChangeQuery(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSearch(e) {
    e.preventDefault();

    const { query } = this.state;

    if (query === '') {
      return;
    }
    this.props.onQuerySearch(query, 0);
  }

  render() {
    const { query } = this.state;

    return (
      <Form className="Search-Form" onSubmit={this.onSearch}>
        <FormGroup>
          <ControlLabel>{this.props.locale.type_query}</ControlLabel>
          <InputGroup>
            <FormControl
              type="text"
              placeholder={this.props.locale.search_terms}
              value={query}
              onChange={this.onChangeQuery}
              name="query"
            />
            <InputGroup.Addon>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

SearchInput.propTypes = {
  onQuerySearch: PropTypes.func.isRequired,
  locale: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WithLocale(SearchInput);
