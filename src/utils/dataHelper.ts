import { ArticleResponse } from '../redux/articleSearch/articleSearchTypes'

export const listAddKey = (articleList: ArticleResponse[]) => {
  return articleList.map(article => ({
    ...article,
    id: articleList.indexOf(article),
  }))
}
