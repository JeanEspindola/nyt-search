import articleSearchService from './articleSearchService';
import articleMockedData from '../mock/articleMockedData.json';

describe('articleSearchService', () => {
  const list = articleMockedData.responseList;

  it('call getSearchResults - success', async () => {
    const ret = articleMockedData.responseList;

    fetch.mockResponseSuccess(ret);

    const response = await articleSearchService.getSearchResults('search', 1);
    expect(response).toBe(list.response.docs);
  });

  it('call getSearchResults - error', async () => {
    const error = new Error('error on service call');

    fetch.mockResponseFailure(error);

    const response = await articleSearchService.getSearchResults('search', 1);
    expect(response).toBe(error);
  });

  it('add id to each element of the list', () => {
    expect(articleSearchService.listAddKey(list.response.docs))
      .toEqual(articleMockedData.formattedList);
  });
});
