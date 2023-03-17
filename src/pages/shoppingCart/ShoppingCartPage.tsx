import React from 'react'
import styles from './ShoppingCartPage.module.css'
import { MainLayout } from '../../layouts/mainLayout'
import { Row, Col, Affix } from 'antd'
import { ProductList, PaymentCard } from '../../components'

export const ShoppingCartPage: React.FC = (props) => {
  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles['product-list-container']}>
            {/* <ProductList /> */}
          </div>
        </Col>

        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            {/* 因为 <PaymentCard> 需要在页面滑动的时候显示一个固定的位置
                所以需要 antd 的锚点元素：Affix 包裹一下 */}
            <div className={styles['payment-card-container']}>
              {/* <PaymentCard /> */}
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  )
}
