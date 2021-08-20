import * as Icon from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { RootStateType } from '../../redux/rootTypes'
import { articleSearchSubmit } from '../../redux/articleSearch/articleSearchAction'
import styles from './PageNavigation.module.scss'
import cx from 'classnames'
import { Button } from '@material-ui/core'

const PageNavigation = () => {
  const { page, query } = useSelector((state: RootStateType) => state.articleList)
  const dispatch = useDispatch()

  const getNewValues = (action: string) => {
    const newPage = action === 'next' ? page + 1 : page - 1
    dispatch(articleSearchSubmit({ query, page: newPage }))
  }

  const isFirstPage = page === 0

  return (
    <div className={styles.container}>
      <Button
        onClick={() => getNewValues('previous')}
        variant="contained"
        color="primary"
        className={cx(styles.baseButton, {
          [styles.disabledButton]: isFirstPage,
          [styles.activeButton]: !isFirstPage,
        })}
        startIcon={<Icon.ChevronLeft />}
        disabled={page === 0}>
        <FormattedMessage id={'previousPage'} />
      </Button>
      <Button
        onClick={() => getNewValues('next')}
        variant="contained"
        color="primary"
        className={cx(styles.baseButton, styles.nextButton)}
        endIcon={<Icon.ChevronRight />}>
        <FormattedMessage id={'nextPage'} />
      </Button>
    </div>
  )
}

export default PageNavigation
