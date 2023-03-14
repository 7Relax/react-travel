import { createStore } from 'redux'
import languageReducer from './language/languageReducer'

const store = createStore(languageReducer)

// state 的类型定义
export type RootState = ReturnType<typeof store.getState>

export default store
