/**
 * slice 的概念：就相当于 reducer store 中分割出来的子模块
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductDetailState {
  loading: boolean
  error: string | null
  data: any // data: 就是产品详情的数据
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null
}

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  /**
   * 1. 这里的 reducer 实际上是将 action 和 reducer 捆绑在一起了，
   * 所以无需再单独定义 action
   * 2. 这里的 reducer 是一个对象而不是过程，每一个对象对应一个action，
   * 同时也对应这个 action 的处理函数
   * 3. 因为 createSlice 本身就是面对对象，而不是面对过程的，
   * 所以不需要再写 switch 语句了
   */
  reducers: {
    /**
     * action + reducer
     * 函数名 fetchStart 其中就是 action 的 type，
     * 对应的函数就是 action 的处理函数（真正的reducer）
     * 参数是当前状态 state
     * reducer 是一个纯函数所以不应该有副作用，而 state 是 immutable 的，
     * 所以我们不可以在 reducer 中直接修改 state 而是应该创建新state
     * 来替换旧 state，如：return { ...state, loading: true }
     */
    fetchStart: (state) => {
      // return { ...state, loading: true } // 不用这样的原始方法了

      /**
       * immer - 会自动把我们的代码转换成 immutable 并且输出一个
       * 全新的 state 对象，而这一切都是无感知的，
       * 这才是一个框架最高的使用境界
       */
      state.loading = true
    },
    // action 的类型已经被 RTK 提前定义好了
    fetchSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    // 自定义 action 的类型
    fetchFail: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
