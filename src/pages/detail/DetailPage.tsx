import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { getTouristRoutes } from '../../api/product'
import { Spin, Row, Col, DatePicker } from 'antd'
import styles from './DetailPage.module.css'
import { Header, Footer, ProductIntro } from '../../components'
const { RangePicker } = DatePicker

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {

  const { touristRouteId } = useParams<MatchParams>()
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  // 使用副作用钩子
  useEffect(() => {
    // 使用异步方式来进行api的调用
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getTouristRoutes(touristRouteId)
        setProduct(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }
    fetchData()
  }, []) // 页面的初始化数据只会调用一次，所以这里用空数组

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

        {/* 产品简介 与 日期选择 */}
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p:any) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: 20 }}/>
            </Col>
          </Row>
        </div>

        {/* 锚点菜单 */}
        <div className={styles['product-detail-anchor']}></div>

        {/* 产品特色 */}
        <div id='feature' className={styles['product-detail-container']}></div>

        {/* 费用 */}
        <div id='fees' className={styles['product-detail-container']}></div>

        {/* 预订须知 */}
        <div id='notes' className={styles['product-detail-container']}></div>

        {/* 产品评价 */}
        <div id='comments' className={styles['product-detail-container']}></div>

      </div>
      <Footer />
    </>
  )
}
