/**
 * 产品相关api
 */

import request from '../utils/request'
import { productList, touristRoutesData } from './mock/mockups'

// 获取产品列表
export const getProductList = () => {
  return request({
    method: 'GET',
    url: '/productCollections'
  }, productList, 180)
}

// 获取旅游路线
export const getTouristRoutes = (id: string | number) => {
  return request({
    method: 'GET',
    url: '/touristRoutes',
    params: {
      id
    }
  }, touristRoutesData, 150)
}
