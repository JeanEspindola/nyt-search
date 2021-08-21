import API from '../api'
import { formattedList } from '../../test/mock/articleMockedData'

describe('api', () => {
  it('should getSearchResults successfully', async () => {
    const response = await API.getSearchResults('test', 0)

    expect(response).toEqual(formattedList)
  })
})
