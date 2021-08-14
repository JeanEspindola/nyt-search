import { RootStateType } from '../redux/rootTypes'

export function createDummyStore(state: RootStateType) {
  return {
    dispatch: jest.fn(),
    getState: () => state,
    subscribe: jest.fn(),
    replaceReducer: jest.fn(),
    [Symbol.observable]: jest.fn(),
  }
}