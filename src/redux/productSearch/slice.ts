import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { searchTouristRoutes, SearchParams } from '../../api/product'

interface ProductSearchState {
  loading: boolean
  error: string | null
  data: any
  pagination: any
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null
}

export const searchProduct = createAsyncThunk(
  'productSearch/searchProduct', // 命名空间/action
  async (params: SearchParams) => {
    const response = await searchTouristRoutes(params)
    return {
      data: response.data,
      pagination: response.pagination
    }
  },
)

export const productSearchSlice = createSlice({
  name: 'productSearch', // 命名空间
  initialState,
  extraReducers: {
    // 所有的映射都是通过 RTK 自动完成的
    [searchProduct.pending.type]: (state) => {
      state.loading = true
    },
    [searchProduct.fulfilled.type]: (state, action) => {
      state.loading = false
      // payload 中 data 和 pagination 是从 searchProduct 里 return 出来的
      state.data = action.payload.data
      state.pagination = action.payload.pagination
      state.error = null
    },
    [searchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
  },
  reducers: {
  },
})
