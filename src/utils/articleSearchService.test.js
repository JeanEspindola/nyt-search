import articleSearchService from './articleSearchService';
import articleMockedData from '../mock/articleMockedData.json';

describe('articleSearchService', () => {
  const list = articleMockedData.responseList;

  const responseObj = {
    response: {
      docs: articleMockedData.responseList,
    },
  };

  const jsonFunc = () => responseObj;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
      resolve({
        ok: true,
        Id: '123',
        json: jsonFunc,
      });
    }));
  });

  it('mock api call mocking function', async () => {
    const response = await articleSearchService.getSearchResults('search', 1);
    expect(response).toBe(list);
  });

  it('add id to each element of the list', () => {
    expect(articleSearchService.listAddKey(list.response.docs))
      .toEqual(articleMockedData.formattedList);
  });
});
