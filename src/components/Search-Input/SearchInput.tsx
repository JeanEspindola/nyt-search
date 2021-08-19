import { FormGroup, FormLabel, IconButton, InputBase, Paper } from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import { FormattedMessage, useIntl } from 'react-intl'
import styles from './SearchInput.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { articleSearchSubmit } from '../../redux/articleSearch/articleSearchAction'

const SearchInput = () => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const [query, setQuery] = useState('')

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
    <FormGroup className={styles.container}>
      <FormLabel>
        <FormattedMessage id={'typeQuery'} />
      </FormLabel>
      <Paper component="form" className={styles.paper} onSubmit={onSearch}>
        <InputBase
          className={styles.input}
          placeholder={placeholderText}
          inputProps={{ 'aria-label': `${placeholderText}` }}
          onChange={onChangeQuery}
          value={query}
          name="query"
        />
        <IconButton type="submit" className={styles.iconButton} aria-label="search">
          <Icon.Search />
        </IconButton>
      </Paper>
    </FormGroup>
  )
}

export default SearchInput
