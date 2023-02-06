import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Form, Input, Checkbox, message} from "antd"

import {loginReq} from "../../api/index"

import logo from "../../assets/images/logo.png"
import "./index.css"

export default function login() {
    // 已取消默认事件
    const onFinish = async (values) => {
        // console.log('Received values of form: ', values);
        const {name, password} = values
        // 等待返回结果
        let response = await loginReq(name,  password)
        console.log(response)
        if(response.code === 200) {
            // 登录成功的操作
            message.info(response.msg)
            
        } else {
            // 登录失败的操作
            message.error(response.msg)
        }

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
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: '账号必填!',
                    },
                    {
                        min: 4,
                        message: "最少4位"
                    },
                    {
                        max: 12,
                        message: "最多12位"
                    },
                    {
                        pattern: /^[a-zA-Z0-9_]+$/,
                        message: "必须是英文数字或_组合的字符"
                    }
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
