export const API_KEY = 'aaassdfdfdfdfdfdf12343KApkAJmTE896X2'
export const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
export const BASE_URL = `${URL}?api-key=${API_KEY}`

/* Filtering the search for only return articles */
export const FILTER_QUERY = 'document_type:("article")'
/* Restricts the response fields to only values necessary */
export const RESPONSE_FIELDS = 'snippet,pub_date,headline,web_url'
