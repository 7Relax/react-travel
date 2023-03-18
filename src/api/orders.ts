/**
 * 订单相关api
 */

import request from '../utils/request'
import { doOrderPayment } from './mock/mockups'

// 订单支付
export const orderPaymnet = (orderId: number) => {
  return request({
    method: 'POST',
    url: `/api/orders/${orderId}/placeOrder`,
  }, doOrderPayment(), 150)
}
