import articleSearchService from '../utils/articleSearchService'
import { formattedList, responseList } from '../mock/articleMockedData'

describe('articleSearchService', () => {
  const list = { ...responseList }

  it('call getSearchResults - success', async () => {
    const ret = { ...responseList }

    // @ts-ignore
    fetch.mockResponseSuccess(ret)

    const response = await articleSearchService.getSearchResults('search', 1)
    expect(response).toBe(list.response.docs)
  })

  it('call getSearchResults - error', async () => {
    const error = new Error('error on service call')

    // @ts-ignore
    fetch.mockResponseFailure(error)

    const response = await articleSearchService.getSearchResults('search', 1)
    expect(response).toBe(error)
  })

  it('add id to each element of the list', () => {
    // @ts-ignore
    expect(articleSearchService.listAddKey(list.response.docs)).toEqual(
      formattedList,
    )
  })
})
