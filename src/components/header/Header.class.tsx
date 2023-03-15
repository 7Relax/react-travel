import React from 'react'
import logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps  } from 'react-router-dom'
import { RootState } from '../../redux/store'
import {
  changeLanguageActionCreator, addLanguageActionCreator
} from '../../redux/language/languageActions'
import { withTranslation, WithTranslation } from 'react-i18next'
// connect 就是一个HOC高阶函数
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const mapStateToProps = (state: RootState) => {
  return {
    language: state.lang.language,
    languageList: state.lang.languageList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: 'zh' | 'en') => {
      const action = changeLanguageActionCreator(code)
      dispatch(action)
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code)
      dispatch(action)
    }
  }
}

type PropsType =
  RouteComponentProps                     // react-router 路由props类型
  & WithTranslation                       // i18n props类型
  & ReturnType<typeof mapStateToProps>    // redux store 映射类型 - ReturnType表示: 反向注入
  & ReturnType<typeof mapDispatchToProps> // redux dispatch 映射类型

// class HeaderClass extends React.Component<RouteComponentProps & WithTranslation, State> {
class HeaderClass extends React.Component<PropsType> {

  menuClickHandler = (e) => {
    if (e.key === 'new') {
      // 处理新语言添加 action
      // const action = addLanguageActionCreator('新语言', 'new_lang')
      this.props.addLanguage('新语言', 'new_lang')
    } else {
      // const action = changeLanguageActionCreator(e.key)
      // store.dispatch(action)
      this.props.changeLanguage(e.key)
    }
  }
  render() {
    // 因为使用了HOC withRouter，所以可以从this.props中取得history
    const history = this.props.history
    // t: i18n
    const { t } = this.props
    return (
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>{t('header.slogan')}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.props.languageList.map((language) => (
                    <Menu.Item key={language.code}>{language.name}</Menu.Item>
                  ))}
                  <Menu.Item key='new'>{t('header.add_new_language')}</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              { this.props.language === 'zh'? '中文' : '英文' }
            </Dropdown.Button>

            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('/register')}>{t('header.register')}</Button>
              <Button onClick={() => history.push('/signin')}>{t('header.signin')}</Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className={styles['main-header']}>

          <span className={styles['header_logo']} onClick={() => history.push('/')}>
            <img src={logo} alt="" className={styles['App-logo']}/>

            <Typography.Title level={3} className={styles.title}>
              {t('header.title')}
            </Typography.Title>
          </span>

          <Input.Search
            placeholder={'请输入旅游目的地、主题、或关键字'}
            className={styles['search-input']}
          />

        </Layout.Header>

        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key={1}>{t('header.home_page')}</Menu.Item>
          <Menu.Item key={2}>{t('header.weekend')}</Menu.Item>
          <Menu.Item key={3}>{t('header.group')}</Menu.Item>
          <Menu.Item key={4}>{t('header.backpack')}</Menu.Item>
          <Menu.Item key={5}>{t('header.private')}</Menu.Item>
          <Menu.Item key={6}>{t('header.cruise')}</Menu.Item>
          <Menu.Item key={7}>{t('header.hotel')}</Menu.Item>
          <Menu.Item key={8}>{t('header.local')}</Menu.Item>
          <Menu.Item key={9}>{t('header.theme')}</Menu.Item>
          <Menu.Item key={10}>{t('header.custom')}</Menu.Item>
          <Menu.Item key={11}>{t('header.study')}</Menu.Item>
          <Menu.Item key={12}>{t('header.visa')}</Menu.Item>
          <Menu.Item key={13}>{t('header.enterprise')}</Menu.Item>
          <Menu.Item key={14}>{t('header.high_end')}</Menu.Item>
          <Menu.Item key={15}>{t('header.outdoor')}</Menu.Item>
          <Menu.Item key={16}>{t('header.insurance')}</Menu.Item>
        </Menu>
      </div>
    )
  }
}

const h = withRouter(HeaderClass)
// 当前语言language和语言列表languageList都通过connect函数注入给HeaderClass的props中了
// 那么就没有在构造函数中初始化那两个state了
const c = connect(mapStateToProps, mapDispatchToProps)
export const Header = c(withTranslation()(h))
