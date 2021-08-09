export interface InitialStateType {
	list: Array<any>
	page: number
	query: string
	loading: boolean
}

export interface RootStateType {
	articleList: InitialStateType,
}
