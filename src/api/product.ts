/**
 * 产品相关api
 */

import request from '../utils/request'
import { productList } from './mock/mockups'

// 获取产品列表
export const getProductList = () => {
  return request({
    method: 'GET',
    url: '/productCollections'
  }, productList, 500)
}
