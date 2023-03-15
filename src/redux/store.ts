import { createStore, combineReducers } from 'redux'
import languageReducer from './language/languageReducer'
import productsReducer from './products/productsReducer'

// rootReducer: 所有reducer的集合体
const rootReducer = combineReducers({
  lang: languageReducer,
  product: productsReducer,
})

const store = createStore(rootReducer)

// state 的类型定义
export type RootState = ReturnType<typeof store.getState>

export default store
