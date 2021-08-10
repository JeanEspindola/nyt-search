import { formattedList, responseList } from '../mock/articleMockedData'
import { listAddKey } from './dataHelper'

describe('DataHelper', () => {
  const list = { ...responseList }

  it('add id to each element of the list', () => {
    // @ts-ignore
    expect(listAddKey(list.response.docs)).toEqual(formattedList)
  })
})
