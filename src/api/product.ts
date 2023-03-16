/**
 * 产品相关api
 */

import request from '../utils/request'
import {
  productList,
  touristRoutesData,
  searchTouristRoutesDataObj
} from './mock/mockups'

// 获取产品列表
export const getProductList = () => {
  return request({
    method: 'GET',
    url: '/api/productCollections'
  }, productList, 180)
}

// 获取旅游路线
export const getTouristRoutes = (id: string | number) => {
  return request({
    method: 'GET',
    url: '/api/touristRoutes',
    params: {
      id
    }
  }, touristRoutesData, 150)
}

export interface SearchParams {
  keywords: string,
  currentPage: number | string,
  pageSize: number | string,
}
// 搜索旅游路线
export const searchTouristRoutes = (params: SearchParams) => {
  let url = `/api/touristRoutes?currentPage=${params.currentPage}&pageSize=${params.pageSize}`
  if (params.keywords) {
    url += `$keywords=${params.keywords}`
  }
  return request({
    method: 'GET',
    url,
  }, searchTouristRoutesDataObj, 120)
}
