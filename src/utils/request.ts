/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosRequestConfig } from 'axios'
import { useSelector } from '../redux/hooks'

// 创建请求实例
const request = axios.create({
  baseURL: 'http://123.56.149.216:8080'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const token = useSelector(state => state.user.token)
  if (token && config && config.headers) {
    // 传的token格式是与后端约定好的
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, async function (error) {
  return await Promise.reject(error)
})

// export default request

// export default <T = any>(config: AxiosRequestConfig) => {
//   return request(config).then(res => {
//     // 返回的类型是由传入的泛型T决定
//     return (res.data.data || res.data) as T
//   })
// }

// 模拟返回
export default <T = any>(config: AxiosRequestConfig, data?: any, time = 300) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}
