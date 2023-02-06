import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Form, Input, Checkbox} from "antd"
import request from "../../api/ajax"
import logo from "../../assets/images/logo.png"
import "./index.css"

export default function login() {
    // 已取消默认事件
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        // 发送ajax 请求
        let baseUrl = "http://mutuopan.com/index.php/api/"
        request(baseUrl + "bs-login", values, "post").then(response => {
            console.log(response)
        }).catch( err => {
            console.log(err)
        })

    };
  return (
    <>
        <div className='header'>
            <img src={logo} alt="logo" />
            <h1>后端专业后台</h1>
        </div>
        <div className="login-content">
            <h3>用户登录</h3>
            {/* 表单组件 */}
            <Form name="login" className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                {/* 账号栏 */}
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: '账号必填!',
                    },
                    ]}
                >
                    <Input className="com-input user-input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
                </Form.Item>

                {/* 密码栏 */}
                <Form.Item name="password"
                    rules={[
                    {
                        required: true,
                        message: '密码必填!',
                    },
                    ]}
                >
                    <Input className="com-input user-input" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
                </Form.Item>

                {/* 记住密码 */}
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="/forget" >
                        Forgot password
                    </a>
                </Form.Item>
                
                {/* 登录按钮 */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>
        </div>
    </>
  )
}
