/* eslint-disable @typescript-eslint/no-unused-vars */

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// 删掉这里的 combineReducers
import { createStore, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import productsReducer from './products/productsReducer'
import thunk from 'redux-thunk'
import { actionLog } from "./middlewares/actionLog"
/**
 * 从 RTK 中引入 combineReducers, 因为这个 combineReducers
 * 支持处理 slice 中的 reducer 的
 */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// 引入产品详情slice
import { productDetailSlice } from './productDetail/slice'


// rootReducer: 所有reducer的集合体
const rootReducer = combineReducers({
  lang: languageReducer,
  product: productsReducer,
  productDetail: productDetailSlice.reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

// state 的类型定义
export type RootState = ReturnType<typeof store.getState>

export default store
