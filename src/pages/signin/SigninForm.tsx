import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './SigninForm.module.css'
import { signin } from '../../redux/user/slice'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/hooks'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const SigninForm: React.FC = () => {

  const loading = useSelector(s => s.user.loading)
  const jwt = useSelector(s => s.user.token)
  const error = useSelector(s => s.user.error)

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (jwt !== null) {
      // 用户已登录，重定向到主页中
      history.push('/')
    }
  }, [history, jwt]) // 监听jwt的变化

  // 表单验证成功
  const onFinish = async (values: any) => {
    try {
      dispatch(signin({
        username: values.username,
        password: values.password
      }))
      // 登录成功
    } catch (e) {
      console.log(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['signin-form']}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
