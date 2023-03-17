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
// 引入搜索产品slice
import { productSearchSlice } from './productSearch/slice'
// 引入用户登录slice
import { userSlice } from './user/slice'
// 引入购物车slice
import { shoppingCartSlice } from './shoppingCart/slice'

// rootReducer: 所有reducer的集合体
const rootReducer = combineReducers({
  lang: languageReducer,
  product: productsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
})

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
// 从普通的 Store 切换为一个 RTK 的 Store
const store = configureStore({
  reducer: rootReducer,
  // getDefaultMiddleware(): 获取所有的默认中间件
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  // 启用：Redux DevTools 谷歌浏览器插件
  devTools: true,
})

// state 的类型定义
export type RootState = ReturnType<typeof store.getState>

export default store
