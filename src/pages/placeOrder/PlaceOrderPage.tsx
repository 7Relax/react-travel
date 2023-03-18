import React from 'react'
import styles from './PlaceOrderPage.module.css'
import { PaymentForm, CheckOutCard } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import { Row, Col } from 'antd'

export const PlaceOrderPage: React.FC = () => {
  return (
    <MainLayout>
      <Row>
        {/* 信用卡支付 */}
        <Col span={12}>
          <PaymentForm />
        </Col>

        {/* 订单摘要 */}
        <Col span={12}>
          {/* <CheckOutCard /> */}
        </Col>
      </Row>
    </MainLayout>
  )
}
