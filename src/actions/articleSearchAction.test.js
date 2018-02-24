import { SEARCH_SUBMIT_SUCCESS, LOADING_INDICATOR_SUCCESS } from '../utils/constants';
import { searchQuerySuccess, loadingSubmit } from './articleSearchAction';

describe('articleSearchAction', () => {
  it('Action --> SEARCH_SUBMIT_SUCCESS', () => {
    const list = [{ article: 'a' }, { article: 'b' }, { article: 'c' }];
    const page = 1;
    const query = 'q';
    expect(searchQuerySuccess(list, page, query)).toEqual({
      type: SEARCH_SUBMIT_SUCCESS, list, page, query,
    });
  });

  it('Action --> LOADING_INDICATOR_SUCCESS', () => {
    const loading = true;
    expect(loadingSubmit(loading)).toEqual({ type: LOADING_INDICATOR_SUCCESS, loading });
  });
});
