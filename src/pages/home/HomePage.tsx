import React from 'react'
import {
  Header, Footer, SideMenu, Carousel,
  ProductCollection, BusinessPartners
} from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from './HomePage.module.css'
// 使用HOC的方式-在类组件中实现i18n
import { withTranslation, WithTranslation } from 'react-i18next'
import { getProductList } from '../../api/product'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  fetchProductsStartActionCreator,
  fetchProductsSuccessActionCreator,
  fetchProductsFailActionCreator,
} from '../../redux/products/productsReducerActions'

const mapStateToProps = (state: RootState) => {
  // 映射数据
  return {
    loading: state.product.loading,
    error: state.product.error,
    productList: state.product.productList
  }
}

// 连接dispatch 分发action
const mapDispatchToProps = (dispatch) => {
  // 映射函数
  return {
    fetchStart: () => {
      dispatch(fetchProductsStartActionCreator())
    },
    fetchSuccess: (data) => {
      dispatch(fetchProductsSuccessActionCreator(data))
    },
    fetchFail: (error) => {
      dispatch(fetchProductsFailActionCreator(error))
    }
  }
}

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends React.Component<PropsType> {

  async componentDidMount() {
    try {
      const data = await getProductList()
      this.props.fetchSuccess(data)
    } catch (error) {
      this.props.fetchFail(error.message)
    }
  }

  render() {
    const { t, productList, loading, error } = this.props

    // loading ...
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

    // 网络出现错误的情况
    if (error) {
      return <div>网站出错：{error}</div>
    }

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
            products={productList[0].touristRoutes}
          />
          <ProductCollection
            title={<Typography.Title level={3} type='danger'>
              {t('home_page.new_arrival')}
            </Typography.Title>}
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          />
          <ProductCollection
            title={<Typography.Title level={3} type='success'>
              {t('home_page.domestic_travel')}
            </Typography.Title>}
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
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
const w = withTranslation()

// 连接组件的props 与 redux store
// 第一个() 里表示：store 的映射数据，第二个() 里放入组件
const c = connect(mapStateToProps, mapDispatchToProps)
export const HomePage = c(w(HomePageComponent))
