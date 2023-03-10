import styles from "./App.module.css"
import { HomePage } from './pages/home'
/**
 * 因为项目是网页项目，所以会利用浏览器的导航功能，利用H5的API来进行路由，
 * 所以使用 BrowserRouter 这个组件，它相当于是一个与路由相关的上下文对象。
 * 用 BrowserRouter 来包裹所有的页面，对于页面的路由需要使用 Route 路径组件
 */
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path='/' component={HomePage} />
      </BrowserRouter>
    </div>
  )
}

export default App
