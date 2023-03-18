/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { commentData } from '../../api/mock/mockups'
import { Spin, Row, Col, DatePicker, Divider, Typography, Anchor, Menu } from 'antd'
import { Button } from 'antd'
import styles from './DetailPage.module.css'
import { ProductIntro, ProductComments } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import { getProductDetail } from '../../redux/productDetail/slice'
import { useSelector } from '../../redux/hooks' // 自定义hook
import { useDispatch  } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { addShoppingCartItem } from '../../redux/shoppingCart/slice'

const { RangePicker } = DatePicker

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {

  const { touristRouteId } = useParams<MatchParams>()

  // const [loading, setLoading] = useState<boolean>(true)
  // const [product, setProduct] = useState<any>(null)
  // const [error, setError] = useState<string | null>(null)

  // 使用 useSelector 来连接产品详情的数据
  const loading = useSelector(state => state.productDetail.loading)
  const error = useSelector(state => state.productDetail.error)
  const product = useSelector(state => state.productDetail.data)

  const shoppingCartloading = useSelector(state => state.shoppingCart.loading)

  // 取得 dispatch 函数
  const dispatch = useDispatch()

  // 使用副作用钩子
  useEffect(() => {
    dispatch(getProductDetail(touristRouteId))
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <MainLayout>
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

            <Button
              loading={shoppingCartloading}
              onClick={() => {
                dispatch(addShoppingCartItem(product.id))
              }}
              danger
              type='primary'
              style={{ marginTop: 50, marginBottom: 30, display: 'block' }}>
              <ShoppingCartOutlined />
              放入购物车
            </Button>

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
    </MainLayout>
  )
}
