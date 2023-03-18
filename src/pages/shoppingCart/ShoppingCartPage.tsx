import React from 'react'
import styles from './ShoppingCartPage.module.css'
import { MainLayout } from '../../layouts/mainLayout'
import { Row, Col, Affix } from 'antd'
import { ProductList, PaymentCard } from '../../components'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { clearShoppingCart, checkout } from '../../redux/shoppingCart/slice'
import { useHistory } from 'react-router-dom'

export const ShoppingCartPage: React.FC = () => {
  const loading = useSelector(s => s.shoppingCart.loading)
  const shoppingCartItems = useSelector(s => s.shoppingCart.items)

  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles['product-list-container']}>
            <ProductList data={shoppingCartItems.map(m => m.touristRoute)} />
          </div>
        </Col>

        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            {/* 因为 <PaymentCard> 需要在页面滑动的时候显示一个固定的位置
                所以需要 antd 的锚点元素：Affix 包裹一下 */}
            <div className={styles['payment-card-container']}>
              <PaymentCard
                loading={loading}
                // 原价
                originalPrice={
                  shoppingCartItems.map(m => m.originalPrice)
                    .reduce((prev, curr) => prev + curr, 0)
                }
                // 现价
                price={
                  shoppingCartItems.map(m => (
                    m.originalPrice * (m.discountPresent ? m.discountPresent : 1)
                  )).reduce((prev, curr) => prev + curr, 0)
                }
                // 用户点击下单按钮
                onCheckout={() => {
                  if (shoppingCartItems.length <= 0) {
                    return // 购物车没有商品，不做任何操作
                  }
                  dispatch(checkout())
                  history.push('/placeOrder')
                }}
                // 挑出所有的购物车Id，再 dispatch 给 clearShoppingCart
                onShoppingCartClear={() => {
                  dispatch(clearShoppingCart(shoppingCartItems.map(m => m.id)))
                }}
              />
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  )
}
