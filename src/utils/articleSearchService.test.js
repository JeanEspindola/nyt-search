import articleSearchService from './articleSearchService';

describe('articleSearchService', () => {
  const list = [
    { article: 'a' },
    { article: 'b' },
    { article: 'c' },
  ];

  const responseObj = {
    response: {
      docs: list,
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

  it('test api call mocking function', async () => {
    const response = await articleSearchService.getSearchResults('search', 1);
    expect(response).toBe(list);
  });

  it('add id to each element of the list', () => {
    const expectedList = [
      {
        id: 1, article: 'a',
      },
      {
        id: 2, article: 'b',
      },
      {
        id: 3, article: 'c',
      },
    ];
    expect(articleSearchService.listAddKey(list)).toEqual(expectedList);
  });
});
