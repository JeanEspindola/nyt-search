import axios from 'axios'
import { camelizeKeys } from 'humps'
import { BASE_URL, FILTER_QUERY, RESPONSE_FIELDS } from '../utils/constants'
import { ArticleResponse } from '../redux/articleSearch/articleSearchTypes'
import { listAddKey } from '../utils/dataHelper'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

const API = {
  getSearchResults(query: string, page: number): Promise<ArticleResponse[]> {
    const queryParams = `&q=${query}&page=${page}&fq=${FILTER_QUERY}&fl=${RESPONSE_FIELDS}`
    const url = `${BASE_URL}${queryParams}`

    return axiosInstance
      .get(url)
      .then(response => camelizeKeys(listAddKey(response.data.response.docs)) as ArticleResponse[])
  },
}

export default API
