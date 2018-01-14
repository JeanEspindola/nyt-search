import { SEARCH_SUBMIT_SUCCESS } from '../utils/constants';
import { searchQuerySuccess } from './articleSearchAction';

describe('articleSearchAction', () => {
  it('Action --> SEARCH_SUBMIT_SUCCESS', () => {
    const list = [{ article: 'a' }, { article: 'b' }, { article: 'c' }];
    const page = 1;
    const query = 'q';
    expect(searchQuerySuccess(list, page, query)).toEqual({ type: SEARCH_SUBMIT_SUCCESS, list, page, query });
  });
});
