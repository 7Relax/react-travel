import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css' // 全局引用样式文件
import './i18n/configs'     // 引用i18n配置
import { Provider } from 'react-redux'
import store from './redux/store'
import axios from 'axios'

// 全局添加一个默认headers x-icode
axios.defaults.headers['x-icode'] = 'FB80558A73FA658E'

ReactDOM.render(
  <React.StrictMode>
    {/* redux store 可全局使用 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
