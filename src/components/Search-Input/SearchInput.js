/*
* Search Input Presentation Component
*
* Displays the search input bar. The search action is in onSubmit action.
*
* */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, InputGroup, Glyphicon, ControlLabel } from 'react-bootstrap';
import './SearchInput.css';

const page = 0;

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
    this.props.onQuerySearch(query, page);
  }

  render() {
    const { query } = this.state;

    return (
      <Form className="Search-Form" onSubmit={this.onSearch}>
        <FormGroup>
          <ControlLabel>Type search query term in here:</ControlLabel>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search your terms here."
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
};

export default SearchInput;
