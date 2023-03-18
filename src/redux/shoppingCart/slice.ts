import {
  createSlice,
  PayloadAction,
  createAsyncThunk
} from '@reduxjs/toolkit'

import {
  getShoppingCartList,
  addShoppingCart,
  batchDeleteShoppingCarts
} from '../../api/cart'

interface ShoppingCartState {
  loading: boolean
  error: string | null
  items: any[] // 购物车列表
}

const initialState: ShoppingCartState = {
  loading: false,
  error: null,
  items: [],
}

// Thunk Action
// 获取购物车列表
export const getShoppingCart = createAsyncThunk(
  'shoppingCart/getShoppingCart', // 命名空间/action
  async () => {
    const list = await getShoppingCartList()
    return list // return 后的数据就是 payload
  },
)

// 添加购物车
export const addShoppingCartItem = createAsyncThunk(
  'shoppingCart/addShoppingCartItem',
  async (touristRouteId: string) => {
    const obj = await addShoppingCart(touristRouteId)
    return obj
  },
)

// 清空购物车（批量）
export const clearShoppingCart = createAsyncThunk(
  'shoppingCart/clearShoppingCart',
   async (ids: number[]) => {
    // 因为清空购物车api 返回的是204 它并没有响应主体
    return batchDeleteShoppingCarts(ids)
  },
)

// Slice
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart', // 命名空间
  initialState,
  extraReducers: {
    // 获取购物车列表
    [getShoppingCart.pending.type]: (state) => {
      state.loading = true
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.loading = false
      state.items = action.payload
      state.error = null
    },
    [getShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
    // 添加购物车
    [addShoppingCartItem.pending.type]: (state) => {
      state.loading = true
    },
    [addShoppingCartItem.fulfilled.type]: (state, action) => {
      state.loading = false
      state.items = [...state.items, action.payload]
      state.error = null
    },
    [addShoppingCartItem.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
    // 清空购物车
    [clearShoppingCart.pending.type]: (state) => {
      state.loading = true
    },
    [clearShoppingCart.fulfilled.type]: (state, action) => {
      state.loading = false
      state.items = [] // 清空
      state.error = null
    },
    [clearShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
  },
  reducers: {
  },
})
