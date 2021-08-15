import { RootStateType } from '../redux/rootTypes'
import { articleListInitialState } from '../redux/articleSearch/articleSearchReducer'

export const dummyRootState: RootStateType = {
  articleList: articleListInitialState,
}
