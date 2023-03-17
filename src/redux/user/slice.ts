import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { userSignin, UserSigninParams } from '../../api/common'

interface UserState {
  loading: boolean
  error: string | null
  token: string | null // 因为后端传来的是 JWT token，所以把 data 改成 token
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
}

export const signin = createAsyncThunk(
  'user/signin', // 命名空间/action
  async (params: UserSigninParams) => {
    const response = await userSignin(params)
    return response.token
  },
)

export const userSlice = createSlice({
  name: 'user', // 命名空间
  initialState,
  extraReducers: {
    // 所有的映射都是通过 RTK 自动完成的
    [signin.pending.type]: (state) => {
      state.loading = true
    },
    [signin.fulfilled.type]: (state, action) => {
      state.loading = false
      state.token = action.payload
      state.error = null
    },
    [signin.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
  },
  reducers: {
  },
})
