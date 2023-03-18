/**
 * 购物车相关api
 */

import request from '../utils/request'
import { shoppingCartData, addCart, doCheckout } from './mock/mockups'

// 获取购物车列表 应该是分页获取的
export const getShoppingCartList = () => {
  return request({
    method: 'GET',
    url: '/api/shoppingCart',
  }, shoppingCartData, 150)
}

// 添加购物车
export const addShoppingCart = (touristRouteId: string) => {
  const obj = addCart()
  return request({
    method: 'POST',
    url: '/api/shoppingCart/items',
    params: {
      touristRouteId
    }
  }, obj, 150)
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

// 下单 - 生成订单信息 - 参数只需要用户的token信息
export const checkout = () => {
  return request({
    method: 'POST',
    url: '/api/shoppingCart/checkout',
  }, doCheckout(), 200)
}
