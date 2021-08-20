import { FormGroup, FormLabel, IconButton, InputBase, Paper } from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import { FormattedMessage, useIntl } from 'react-intl'
import styles from './SearchInput.module.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { articleSearchSubmit } from '../../redux/articleSearch/articleSearchAction'
import { RootStateType } from '../../redux/rootTypes'

const SearchInput = () => {
  const dispatch = useDispatch()
  const intl = useIntl()

  const { query } = useSelector((state: RootStateType) => state.articleList)

  const [stateQuery, setStateQuery] = useState(query)

  const placeholderText = intl.formatMessage({ id: 'searchTerms' })

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateQuery(e.target.value)
  }

  const onSearch = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    if (stateQuery === '') {
      return
    }
    dispatch(articleSearchSubmit({ query: stateQuery, page: 0 }))
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
          value={stateQuery}
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
