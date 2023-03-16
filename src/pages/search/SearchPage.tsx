import React, { useEffect } from 'react'
import styles from './SearchPage.module.css'
import { Header, Footer, FilterArea, ProductList } from '../../components'
import { useParams, useLocation } from 'react-router-dom'
import { Spin } from 'antd'
import { searchProduct } from '../../redux/productSearch/slice'
import { useSelector } from '../../redux/hooks' // 用useSelector连接redux中的state
import { useDispatch } from 'react-redux'

interface MatchParams {
  keywords: string
}

export const SearchPage: React.FC = () => {
  const { keywords } =  useParams<MatchParams>()
  const loading = useSelector(state => state.productSearch.loading)
  const error = useSelector(state => state.productSearch.error)
  const data = useSelector(state => state.productSearch.data)
  const pagination = useSelector(state => state.productSearch.pagination)

  const dispatch = useDispatch()
  const location = useLocation()

  /**
   * 副作用处理函数 useEffect
   * 传入location表示会监听url的变化，一旦url发生变化就会立即启动useEffect函数，
   * 重新进行旅游路线的搜索
   */
  useEffect(() => {
    // 分发 searchProduct 这个异步action
    dispatch(searchProduct({ currentPage: 1, pageSize: 10, keywords }))
  }, [dispatch, keywords, location])

  const onPageChange = (currentPage, pageSize) => {
    dispatch(searchProduct({ currentPage, pageSize, keywords }))
  }

  if (loading) {
    return (
      <Spin
        size='large'
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%'
        }}
      />
    )
  }

  if (error) {
    return <div>网站出错：{error}</div>
  }

  return (
    <>
      <Header />
      <div className={styles['page-content']}>

        {/* 分类过滤器 */}
        <div className={styles['product-list-container']}>
          <FilterArea />
        </div>

        {/* 产品搜索列表 */}
        <div className={styles['product-list-container']}>
          <ProductList
            data={data}
            paging={pagination}
            onPageChange={onPageChange}
          />
        </div>

      </div>
      <Footer />
    </>
  )
}
