/**
 * 公共api
 */

import request from '../utils/request'
import { userToken } from './mock/mockups'

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

export interface UserSigninParams {
  username: string
  password: string
}

// 登录
export const userSignin = (pojo: UserSigninParams) => {
  return request({
    method: 'POST',
    url: '/auth/signin',
    params: {
      username: pojo.username,
      password: pojo.password,
    }
  }, userToken, 1000)
}
