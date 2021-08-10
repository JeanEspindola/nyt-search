/*
 * Constants:
 *
 * All constant values used on actions and reducers.
 * API_KEY is the one I generated with my account.
 *
 * */
export const API_KEY = 'xD015TGRNZtOfYfZq1KApkAJmTE896X2'
export const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
/* Filtering the search for only return articles */
export const FILTER_QUERY = 'document_type:("article")'
/* Restricts the response fields to only values necessary */
export const RESPONSE_FIELDS = 'snippet,pub_date,headline,web_url'

export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS'
export const LOADING_INDICATOR_SUCCESS = 'LOADING_INDICATOR_SUCCESS'
