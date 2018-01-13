import 'whatwg-fetch';
import { URL, API_KEY } from "./constants";

const data = '';

class ArticleSearchService {

  static getSearchResults(q, page) {
    return fetch(
      URL,
      {
        method: 'GET',
      },
    ).then(() => data)
      .catch(error => error);
  }
}

export default ArticleSearchService;
