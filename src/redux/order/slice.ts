import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { orderPaymnet } from '../../api/orders'
import { checkout } from '../shoppingCart/slice' // 引入 checkout action

interface OrderState {
  loading: boolean
  error: string | null
  currentOrder: any // 当前订单信息会在下单（checkout）成功后获得
}

const initialState: OrderState = {
  loading: false,
  error: null,
  currentOrder: null,
}

// 因为action是用来做支付的，所以函数名称叫 placeOrder
export const placeOrder = createAsyncThunk(
  'order/placeOrder', // 命名空间/action
  async (orderId: string) => {
    const currentOrder = await orderPaymnet(orderId)
    return currentOrder
  },
)

export const orderSlice = createSlice({
  name: 'order', // 命名空间
  initialState,
  extraReducers: {
    // 订单支付
    [placeOrder.pending.type]: (state) => {
      state.loading = true
    },
    [placeOrder.fulfilled.type]: (state, action) => {
      state.loading = false
      state.currentOrder = action.payload
      state.error = null
    },
    [placeOrder.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
    // checkout 下单
    [checkout.pending.type]: (state) => {
      state.loading = true
    },
    [checkout.fulfilled.type]: (state, action) => {
      state.loading = false
      state.currentOrder = action.payload // 下单成功后的数据保存在 当前订单 currentOrder 中
      state.error = null
    },
    [checkout.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
  },
  reducers: {
  },
})
