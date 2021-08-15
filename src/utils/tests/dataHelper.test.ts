import { formattedList, responseList } from '../../test/mock/articleMockedData'
import { listAddKey } from '../dataHelper'

describe('DataHelper', () => {
  it('add id to each element of the list', () => {
    expect(listAddKey(responseList)).toEqual(formattedList)
  })
})
