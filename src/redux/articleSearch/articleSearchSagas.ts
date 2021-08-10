// import {
//   ArticleSearchSubmit,
//   ArticleSearchSubmitFailed,
//   ArticleSearchSubmitInProgress,
//   ArticleSearchSubmitSuccess,
// } from './articleSearchAction'

// export function* articleSearchSaga(action: ArticleSearchSubmit) {
//   // eslint-disable-next-line no-console
//   console.log('saga')
//
//   try {
//     yield put(new ArticleSearchSubmitInProgress())
//
//     const { query, page } = action.payload
//     // @ts-ignore
//     const list = yield call(API.getSearchResults, query, page)
//
//     yield put(
//       new ArticleSearchSubmitSuccess({
//         list,
//         query,
//         page,
//       })
//     )
//   } catch (error) {
//     yield put(new ArticleSearchSubmitFailed())
//   }
// }

export default function* articleSearchWatcher() {
  //yield all([takeLatest(ArticleSearchActionTypes.SEARCH_SUBMIT_INPROGRESS, articleSearchSaga)])
}
