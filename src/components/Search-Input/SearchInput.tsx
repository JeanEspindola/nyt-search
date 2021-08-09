/*
* Search Input Presentation Component
*
* Displays the search input bar. The search action is in onSubmit action.
*
* */
import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { loadSearchResults } from '../../actions/articleSearchAction'
import './SearchInput.css';
import { FormattedMessage, useIntl } from 'react-intl'

const SearchInput = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const intl = useIntl();

  const placeholderText = intl.formatMessage({ id: 'searchTerms' });

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const onSearch = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if (query === '') {
      return;
    }

    dispatch(loadSearchResults(query, 0))
  }

  return (
    <Form className="Search-Form" onSubmit={onSearch}>
      <FormGroup>
        <FormLabel>
          <FormattedMessage id={'typeQuery'} />
        </FormLabel>
        <InputGroup>
          <FormControl type="text" placeholder={placeholderText}
            value={query}
            onChange={onChangeQuery}
            name="query"
          />
          <Icon.Search />
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default SearchInput
