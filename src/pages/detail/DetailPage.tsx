import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { getTouristRoutes } from '../../api/product'
import { commentData } from '../../api/mock/mockups'
import { Spin, Row, Col, DatePicker, Divider, Typography, Anchor, Menu } from 'antd'
import styles from './DetailPage.module.css'
import { Header, Footer, ProductIntro, ProductComments } from '../../components'
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
        <Anchor className={styles['product-detail-anchor']}>
          <Menu mode={'horizontal'}>
            <Menu.Item key="1">
              <Anchor.Link href='#feature' title='产品特色'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Anchor.Link href='#fees' title='费用'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Anchor.Link href='#notes' title='预订须知'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Anchor.Link href='#comments' title='用户评价'></Anchor.Link>
            </Menu.Item>
          </Menu>
        </Anchor>

        {/* 产品特色 */}
        <div id='feature' className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>

          {/* react 为了防止注入攻击，有个特殊的html的处理机制：就是无法在react元素中直接渲染html
            必须使用特殊api加工过后的html: dangerouslySetInnerHTML
            注意：使用html注入的方式还有很多细节需要注意，
            如：1.网站的全局css样式可能会有冲突 2.编辑和显示html字符串的时候也要注意防范注入攻击 */}
           <div
              dangerouslySetInnerHTML={{__html: product.features}}
              style={{ margin: 50 }}>
            </div>
        </div>

        {/* 费用 */}
        <div id='fees' className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.fees}} style={{ margin: 50 }}></div>
        </div>

        {/* 预订须知 */}
        <div id='notes' className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>预订须知</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.notes}} style={{ margin: 50 }}></div>
        </div>

        {/* 用户评价 */}
        <div id='comments' className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>用户评价</Typography.Title>
          </Divider>
          <div style={{ margin: 40 }}>
            <ProductComments
              data={commentData}
            />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
