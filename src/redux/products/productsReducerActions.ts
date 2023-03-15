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
