import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import styles from './SearchInput.module.scss'
import { FormattedMessage, useIntl } from 'react-intl'
import { articleSearchSubmit } from '../../redux/articleSearch/articleSearchAction'

const SearchInput = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const intl = useIntl()

  const placeholderText = intl.formatMessage({ id: 'searchTerms' })

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const onSearch = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    if (query === '') {
      return
    }

    dispatch(articleSearchSubmit({ query, page: 0 }))
  }

  return (
    <Form className={styles.container} onSubmit={onSearch}>
      <FormGroup controlId="formSearch">
        <FormLabel>
          <FormattedMessage id={'typeQuery'} />
        </FormLabel>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder={placeholderText}
            value={query}
            onChange={onChangeQuery}
            name="query"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              <Icon.Search />
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default SearchInput