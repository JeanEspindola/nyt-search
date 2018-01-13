import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
//import './SearchInput.css';

const page = 0;

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.onChangeQuery = this.onChangeQuery.bind(this);
  }

  onChangeQuery(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSearch = (e) => {
    e.preventDefault();

    const { query } = this.state;

    if (query === '') {
      return;
    }

    this.props.onQuerySearch(query, page);
    };

  render() {
    const { query } = this.state;

    return (
      <div>
        <Row className="">
          <Col xs={12}>
            <span className="">
                Type search query term in here:
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form inline className="" onSubmit={this.onSearch}>
              <FormGroup controlId="formInlineEmail">
                <InputGroup>
                  <FormControl
                    type="text"
                    className=""
                    placeholder="Paste the url here."
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
          </Col>
        </Row>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onQuerySearch: PropTypes.func.isRequired,
};

export default SearchInput;
