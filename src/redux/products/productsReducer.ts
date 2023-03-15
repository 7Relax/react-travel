import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  ProductsAction
} from './productsReducerActions'

// 推荐产品 state 的数据结构接口
interface ProductsState {
  productList: any[]
  loading: boolean
  error: string | null
}

// 推荐产品 state 的初始化数据
const defaultState: ProductsState = {
  productList: [],
  loading: true, // 表示正在获取数据
  error: null
}

const reducer = (state = defaultState, action: ProductsAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:   // 请求开始，只需要修改loading
      return { ...state, loading: true }
    case FETCH_PRODUCTS_SUCCESS: // 请求成功
      return { ...state, loading: false, productList: action.payload }
    case FETCH_PRODUCTS_FAIL:    // 请求失败
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default reducer
