export interface InitialStateType {
  list: Array<never>
  page: number
  query: string
  loading: boolean
}

export interface RootStateType {
  articleList: InitialStateType
}
