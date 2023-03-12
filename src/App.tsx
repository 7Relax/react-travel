import styles from "./App.module.css"
import { HomePage, SigninPage, RegisterPage, DetailPage } from './pages'
/**
 * 因为项目是网页项目，所以会利用浏览器的导航功能，利用H5的API来进行路由，
 * 所以使用 BrowserRouter 这个组件，它相当于是一个与路由相关的上下文对象。
 * 用 BrowserRouter 来包裹所有的页面，对于页面的路由需要使用 Route 路径组件
 */
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
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
          {/* 当在Route中使用component传递组件的时候，React Router会向下传递3个props数据，
            分别是：history, location, match
          */}
          <Route path='/signin' component={SigninPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
