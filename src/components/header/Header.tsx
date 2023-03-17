import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { useHistory  } from 'react-router-dom'
// 解耦: 使用特殊处理过后的 useSelector 获取state数据
import { useSelector } from '../../redux/hooks'
// 组件分发action事件 使用useDispatch这个钩子
import { useDispatch } from 'react-redux'
// import { Dispatch } from 'redux'
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
  // LanguageActionTypes
} from '../../redux/language/languageActions'
import { useTranslation } from 'react-i18next'
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode'
import { userSlice } from '../../redux/user/slice'

// 自定义JwtPayload
interface JwtPayload extends DefaultJwtPayload {
  username: string
}

export const Header: React.FC = () => {
  const history = useHistory()
  /**
   * useSelector: 连接store并获取state数据
   * 使用useSelector的意义：为了解决store和组件的耦合问题，如果每次在使用
   * useSelector的时候都要指定state的类型，这就意味着组件和store绑定起来了
   * 而组件与store的深度绑定会导致组件无法被复用，所以需要将state的类型从
   * 组件中剥离，则需要使用一个接口 (TypedUseSelectorHook) 来实现
   */
  const language = useSelector(state => state.lang.language)
  const languageList = useSelector(state => state.lang.languageList)
  /**
   * 这里不做dispatch类型处理，直接使用any类型，因为这样的强类型定义在这里并没有
   * 起到太大的作用，反而会让代码看上去会更加臃肿，破坏js代码的灵活性
  */
 // const dispatch = useDispatch<Dispatch<LanguageActionTypes>>()
  const dispatch = useDispatch()

  // 从Store中取得 jwt 并解码
  const jwt = useSelector(s => s.user.token)
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (jwt) {
      // 解码jwt
      const token = jwt_decode<JwtPayload>(jwt)
      // 更新用户数据
      setUsername(token.username)
    }
  }, [jwt])

  const menuClickHandler = (e) => {
    if (e.key === 'new') {
      const action = addLanguageActionCreator('新语言', 'new_lang')
      dispatch(action)
    } else {
      const action = changeLanguageActionCreator(e.key)
      dispatch(action)
    }
  }

  const [logoutLoading, setLogoutLoading] = useState<boolean>(false)
  const onLogout = () => {
    setLogoutLoading(true)
    setTimeout(() => {
      setLogoutLoading(false)
      // 分发登出action
      dispatch(userSlice.actions.logout())
      // 因为用户可能会在任意页面选择登出，所以这个网站还需要重定向到登录页面
      history.push('/')
      // 刷新页面，可加可不加
      // window.location.reload(false)
    }, 500)
  }

  const { t } = useTranslation()

  return (
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>{t('header.slogan')}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map(l => (
                  <Menu.Item key={l.code}>{l.name}</Menu.Item>
                ))}
                <Menu.Item key='new'>{t('header.add_new_language')}</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === 'zh' ? '中文' : '英文'}
          </Dropdown.Button>
          {jwt ?
            <Button.Group className={styles['button-group']}>
              <span style={{ marginRight: 10 }}>{t('header.welcome')}</span>
              <Typography.Text strong style={{ marginRight: 10 }}>{ username }</Typography.Text>
              <Button onClick={() => history.push('/shoppingCart')}>{t('header.shoppingCart')}</Button>
              <Button onClick={ onLogout } loading={ logoutLoading }>{t('header.logout')}</Button>
            </Button.Group>
            :
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('/register')}>{t('header.register')}</Button>
              <Button onClick={() => history.push('/signin')}>{t('header.signin')}</Button>
            </Button.Group>
          }
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
          onSearch={(keywords) => history.push('/search/' + keywords)}
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
