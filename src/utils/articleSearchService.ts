/*
* Article Search Service:
*
* Functions available to use on the list. Separation of concerns.
*
* */
import 'whatwg-fetch';
import { URL, API_KEY, FILTER_QUERY, RESPONSE_FIELDS } from './constants';

const baseUrl = `${URL}?api-key=${API_KEY}`;

const ArticleSearchService = {
  /*
  * Here I'm using fetchAPI to make http requests.
  * */
  async getSearchResults(query: string, page: number) {
    const queryParams = `&q=${query}&page=${page}&fq=${FILTER_QUERY}&fl=${RESPONSE_FIELDS}`;
    const url = `${baseUrl}${queryParams}`;

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response.docs)
      .catch(error => error);
  },

  /*
  * The returned data from the API does not have uniqueIDs. React demands one for rendering
  * lists, so before I return the data, I add id to each object in the array.
  * */
  listAddKey(array: Array<any>) {
    let id = 1;
    for (let it = 0; it < array.length; it += 1) {
      const item = array[it];
      item.id = id;
      id += 1;
    }

    return array;
  }
}

export default ArticleSearchService;
