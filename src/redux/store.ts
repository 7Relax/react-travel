import { createStore, combineReducers, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import productsReducer from './products/productsReducer'
import thunk from 'redux-thunk'

// rootReducer: 所有reducer的集合体
const rootReducer = combineReducers({
  lang: languageReducer,
  product: productsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// state 的类型定义
export type RootState = ReturnType<typeof store.getState>

export default store
