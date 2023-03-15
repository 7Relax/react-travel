import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import { getProductList } from '../../api/product'

// 正在获取(调用)推荐产品api
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'
// 推荐产品api调用成功
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
// 推荐产品api调用失败
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'

interface FetchProductsStartAction {
  type: typeof FETCH_PRODUCTS_START
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: any // payload: api调用成功后返回的数据，用any可以保证代码的灵活性
}

interface FetchProductsFailAction {
  type: typeof FETCH_PRODUCTS_FAIL
  payload: any // payload: api调用失败后返回的数据
}

// 联合 action 的类型，方便在 reducer 中使用
export type ProductsAction =
  | FetchProductsStartAction
  | FetchProductsSuccessAction
  | FetchProductsFailAction

// 正在获取(调用)推荐产品api Action Creator
export const fetchProductsStartActionCreator = (): FetchProductsStartAction => {
  return {
    type: FETCH_PRODUCTS_START
  }
}

// 推荐产品api调用成功 Action Creator
export const fetchProductsSuccessActionCreator = (data): FetchProductsSuccessAction => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data
  }
}

// 推荐产品api调用失败 Action Creator
export const fetchProductsFailActionCreator = (error): FetchProductsFailAction => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: error
  }
}

// thunk 作用：让dispatch多支持一种函数的类型
// thunk 可以返回一个函数，而不一定是js对象
// 在一个 thunk action 中可以完成一些列连接的action的操作
// 并且可以处理异步逻辑
// 业务逻辑可以从 ui 层面挪到这里，代码分层会更清晰
/**
 * ThunkAction 泛型有4个参数：
 * R: return 最终的输出类型
 * S: Store 的 state 的类型
 * E: extra 定义额外的参数
 * A: Action
 */
export const getMeDataActionCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  ProductsAction
> => async (dispatch, getState) => {
  dispatch(fetchProductsStartActionCreator())
  try {
    const data = await getProductList()
    dispatch(fetchProductsSuccessActionCreator(data))
  } catch (error) {
    dispatch(fetchProductsFailActionCreator(error.message))
  }
}
