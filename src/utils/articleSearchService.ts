/*
 * Article Search Service:
 *
 * Functions available to use on the list. Separation of concerns.
 *
 * */
import 'whatwg-fetch'

const ArticleSearchService = {
  /*
   * The returned data from the API does not have uniqueIDs. React demands one for rendering
   * lists, so before I return the data, I add id to each object in the array.
   * */
  listAddKey(array: Array<never>) {
    let id = 1
    for (let it = 0; it < array.length; it += 1) {
      const item = array[it]
      // @ts-ignore
      item.id = id
      id += 1
    }

    return array
  },
}

export default ArticleSearchService
