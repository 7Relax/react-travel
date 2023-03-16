/**
 * 公共api
 */

import request from '../utils/request'

// 注册
export const register = (pojo) => {
  return request({
    method: 'POST',
    url: '/auth/register',
    params: {
      email: pojo.username,
      password: pojo.password,
      confirmPassword: pojo.confirm,
    }
  }, {}, 250)
}
