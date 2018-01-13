import 'whatwg-fetch';
import { URL, API_KEY, FILTER_QUERY, RESPONSE_FIELDS } from './constants';

const baseUrl = `${URL}?api-key=${API_KEY}`;

class ArticleSearchService {
  static getSearchResults(query, page) {
    const queryParams = `&q=${query}&page=${page}&fq=${FILTER_QUERY}&fl=${RESPONSE_FIELDS}`;
    const url = `${baseUrl}${queryParams}`;

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response.docs)
      .catch(error => error);
  }
}

export default ArticleSearchService;
