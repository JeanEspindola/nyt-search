import { Pagination } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { RootStateType } from '../../redux/rootTypes'
import { articleSearchSubmit } from '../../redux/articleSearch/articleSearchAction'

const PageNavigation = () => {
  const { page, query } = useSelector((state: RootStateType) => state.articleList)
  const dispatch = useDispatch()

  const getNewValues = (action: string) => {
    const newPage = action === 'next' ? page + 1 : page - 1
    dispatch(articleSearchSubmit({ query, page: newPage }))
  }

  return (
    <Pagination>
      <Pagination.Prev onClick={() => getNewValues('previous')} disabled={page === 0}>
        <Icon.ChevronLeft />
        <FormattedMessage id={'previousPage'} />
      </Pagination.Prev>
      <Pagination.Next onClick={() => getNewValues('next')}>
        <FormattedMessage id={'nextPage'} />
        <Icon.ChevronRight />
      </Pagination.Next>
    </Pagination>
  )
}

export default PageNavigation
