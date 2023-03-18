import React from 'react'
import styles from './PlaceOrderPage.module.css'
import { PaymentForm, CheckOutCard } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import { Row, Col } from 'antd'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../../redux/order/slice'

export const PlaceOrderPage: React.FC = () => {
  const loading = useSelector(s => s.order.loading)
  const currentOrder = useSelector(s => s.order.currentOrder)

  const dispatch = useDispatch()

  return (
    <MainLayout>
      <Row>
        {/* 信用卡支付 */}
        <Col span={12}>
          <PaymentForm />
        </Col>

        {/* 订单摘要 */}
        <Col span={12}>
          <CheckOutCard
            loading={loading}
            order={currentOrder}
            onCheckout={() => {
              dispatch(placeOrder(currentOrder.id))
            }}
          />
        </Col>
      </Row>
    </MainLayout>
  )
}
