import React from 'react'
import {
  Header, Footer, SideMenu, Carousel,
  ProductCollection, BusinessPartners
} from '../../components'
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from './mockups'
import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from './HomePage.module.css'
// 使用HOC的方式-在类组件中实现i18n
import { withTranslation, WithTranslation } from 'react-i18next'

class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    const { t } = this.props
    return (
      <>
        <Header />

        {/* 页面内容 content */}
        <div className={styles['page-content']}>
          <Row style={{marginTop: 20}}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>

          {/* 产品推荐 */}
          <ProductCollection
            title={<Typography.Title level={3} type='warning'>
              {t('home_page.hot_recommended')}
            </Typography.Title>}
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductCollection
            title={<Typography.Title level={3} type='danger'>
              {t('home_page.new_arrival')}
            </Typography.Title>}
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={<Typography.Title level={3} type='success'>
              {t('home_page.domestic_travel')}
            </Typography.Title>}
            sideImage={sideImage3}
            products={productList3}
          />

          {/* 合作企业 */}
          <BusinessPartners />
        </div>

        <Footer />
      </>
    )
  }
}

// 第一个() 返回的是语言所使用的命名空间，第二个() 才是用于组件的
// 相当于是高阶组件的高阶组件
export const HomePage = withTranslation()(HomePageComponent)
