import { Middleware } from 'redux'

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('当前 state', store.getState())
  console.log('被拦截的 action', action)
  next(action)
  console.log('更新后的 state', store.getState())
}

export const actionLog2: Middleware = (store) => {
  return (next) => {
    return (action) => {
      console.log('当前 state', store.getState())
      console.log('被拦截的 action', action)
      next(action)
      console.log('更新后的 state', store.getState())
    }
  }
}
