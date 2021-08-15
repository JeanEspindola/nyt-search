import { RootStateType } from '../redux/rootTypes'

const consoleError = console.error

export function mockConsoleError() {
  console.error = jest.fn()
}

export function restoreConsoleError() {
  console.error = consoleError
}

export function createDummyStore(state: RootStateType) {
  return {
    dispatch: jest.fn(),
    getState: () => state,
    subscribe: jest.fn(),
    replaceReducer: jest.fn(),
    [Symbol.observable]: jest.fn(),
  }
}

export const mockApi = (
  apiMethod: Function,
  statusCode: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: Record<string, any>
) => {
  const mockedAPI = apiMethod as jest.Mock

  mockedAPI.mockClear()

  if (statusCode <= 299) {
    mockedAPI.mockResolvedValue(response)
  } else {
    mockedAPI.mockRejectedValue(response)
  }
  return mockedAPI
}

export interface TestDispatchType<T> {
  type?: string
  payload?: T
}
