import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css' // 全局引用样式文件
import './i18n/configs'     // 引用i18n配置

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
