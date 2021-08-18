import * as Icon from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { RootStateType } from '../../redux/rootTypes'
import { articleSearchSubmit } from '../../redux/articleSearch/articleSearchAction'
import styles from './PageNavigation.module.scss'
import cx from 'classnames'

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
      <button
        className={cx(styles.baseButton, {
          [styles.disabledButton]: isFirstPage,
          [styles.activeButton]: !isFirstPage,
        })}
        onClick={() => getNewValues('previous')}
        disabled={page === 0}>
        <Icon.ChevronLeft />
        <FormattedMessage id={'previousPage'} />
      </button>
      <button
        className={cx(styles.baseButton, styles.activeButton, styles.nextButton)}
        onClick={() => getNewValues('next')}>
        <FormattedMessage id={'nextPage'} />
        <Icon.ChevronRight />
      </button>
    </div>
  )
}

export default PageNavigation
