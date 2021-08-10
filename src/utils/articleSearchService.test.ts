import articleSearchService from '../utils/articleSearchService'
import { formattedList, responseList } from '../mock/articleMockedData'

describe('articleSearchService', () => {
  const list = { ...responseList }

  it('add id to each element of the list', () => {
    // @ts-ignore
    expect(articleSearchService.listAddKey(list.response.docs)).toEqual(formattedList)
  })
})
