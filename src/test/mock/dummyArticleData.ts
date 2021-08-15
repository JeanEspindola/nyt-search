import { ArticleListStateType } from '../../redux/articleSearch/articleSearchTypes'

export const dummyArticleSearchState: ArticleListStateType = {
  list: [],
  loading: false,
  page: 0,
  query: '',
}
