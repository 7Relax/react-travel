/**
 * 购物车相关api
 */

import request from '../utils/request'
import { shoppingCartData } from './mock/mockups'

// 获取购物车列表 应该是分页获取的
export const getShoppingCartList = () => {
  return request({
    method: 'GET',
    url: '/api/shoppingCart',
  }, shoppingCartData, 150)
}

// 添加购物车
export const addShoppingCart = (touristRouteId: string) => {
  return request({
    method: 'POST',
    url: '/api/shoppingCart/items',
    params: {
      touristRouteId
    }
  }, shoppingCartData, 250)
}

// 删除购物车商品，删除成功响应 204 No Content
export const deleteShoppingCart = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/api/shoppingCart/items/${id}`,
  }, {}, 200)
}

// 批量删除购物车商品，删除成功响应 204 No Content
export const batchDeleteShoppingCarts = (ids: number[]) => {
  return request({
    method: 'DELETE',
    url: `/api/shoppingCart/items/(${ids.join(',')})`,
  }, {}, 200)
}
