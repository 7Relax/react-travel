import React from 'react'
import styles from "./App.module.css"
import {
  HomePage,
  SigninPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage
} from './pages'
/**
 * 因为项目是网页项目，所以会利用浏览器的导航功能，利用H5的API来进行路由，
 * 所以使用 BrowserRouter 这个组件，它相当于是一个与路由相关的上下文对象。
 * 用 BrowserRouter 来包裹所有的页面，对于页面的路由需要使用 Route 路径组件
 */
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from './redux/hooks'

/**
 * 搭建私有路由
 * component: 路由所指的页面组件
 * isAuthenticated: 判断是否登录
 * rest: 其它属性
 */
const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const RouteComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={'/signin'}/>
    )
  }
  return <Route component={RouteComponent} {...rest} />
}

function App() {
  // 取得jwt
  const jwt = useSelector(state => state.user.token)
  return (
    <div className={styles.App}>
      <BrowserRouter>
        {/* Switch组件做页面切换，自动做短路处理，每次只会渲染一条路径，
          可以从原头消除页面堆叠的影响，会根据路径的优先级渲染 */}
        <Switch>
          {/* 根据react router组件化的理念，默认情况下（未做短路处理）它并不在乎路径的唯一性，
            只要路径可以被Route组件截获，可以被局部匹配，那么不管有多少个页面
            都会被同时显示出来，所以 /signin 这个url可以被以下两个Route组件同时解析，
            所以这两个页面会叠在一起显示了。
          */}
          <Route exact path='/' component={HomePage} />
          {/* React Router在Route组件中，通过component把路由数据传递给页面的：
            分别是：history, location, match 这3个props，
            那么跨组件（子组件）的路由信息又是如何传递的呢？可以利用 HOC、hooks
          */}
          <Route path='/signin' component={SigninPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          {/* keywords:搜索关键词  ?:可选的 */}
          <Route path='/search/:keywords?' component={SearchPage} />

          <PrivateRoute
            // jwt !== null 为真则表示已登录 可以访问 ShoppingCartPage 页面了
            isAuthenticated={jwt !== null}
            path='/shoppingCart'
            component={ShoppingCartPage}
          />

          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
