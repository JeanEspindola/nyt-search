import combinedReducer from './indexReducer';

describe('indexReducer', () => {
  const base = {
    articleList: [],
  };

  it('handle Reducer --> articleList', () => {
    expect(combinedReducer({ articleList: [] }, { undefined, type: {} })).toEqual(base);
  });
});
