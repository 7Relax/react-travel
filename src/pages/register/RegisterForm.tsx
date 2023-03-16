import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import styles from './RegisterForm.module.css'
import { register } from '../../api/common'
import { useHistory } from 'react-router-dom'

export const RegisterForm: React.FC = () => {

  const history = useHistory()

  const onFinish = async (values: any) => {
    try {
      await register(values)
      // 重定向到登录页
      history.push('/signIn/')
    } catch (error) {
      alert('注册失败！')
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
      className={styles['register-form']}
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

      <Form.Item
        label="Confirm Password"
        name="confirm"
        hasFeedback
        rules={[
          { required: true, message: 'Please input your confirm password!' },
          (({ getFieldValue }) => ({
            // 第一个参数：RuleObject 用 _ 表示
            // 第二个参数：传递进来的数据 value
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                // 验证成功
                return Promise.resolve()
              }
              return Promise.reject('密码确认不一致！')
            }
          }))
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
