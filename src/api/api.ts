import axios from 'axios'
import { camelizeKeys } from 'humps'
import { BASE_URL, FILTER_QUERY, RESPONSE_FIELDS } from '../utils/constants'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

const API = {
  getSearchResults(query: string, page: number) {
    const queryParams = `&q=${query}&page=${page}&fq=${FILTER_QUERY}&fl=${RESPONSE_FIELDS}`
    const url = `${BASE_URL}${queryParams}`

    return axiosInstance.get(url).then((response) => camelizeKeys(response.data.response.docs))
  },
}

export default API
