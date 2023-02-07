import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom"
import { Layout, Space } from 'antd';
import LeftNav from '../../components/left-nav/left-nav';
import Header from "../../components/header/header"

// 后台路由组件
import Home from "../../pages/home/home"
import Category from "../../pages/category/category"
import Product from "../../pages/product/product"
import User from "../../pages/users/user"
import Role from "../../pages/role/role"
import Bar from "../../pages/charts/bar"
import Pie from "../../pages/charts/pie"
import Line from "../../pages/charts/line"

import memoryUtil from "../../utils/memoryUtil"
import "./index.css"

const {Footer, Sider, Content } = Layout

const contentStyle = {
  // textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '120px',
  margin: 20,
  backgroundColor: '#fff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
};
const footerStyle = {
  textAlign: 'center',
  color: '#ccc',
  // backgroundColor: '#7dbcea',
};

const Admin = () => {
  let user = memoryUtil.user
  if(!user || !user.id) {
      return <Redirect to="/login" />
  }else {
    return (
      <div className='admin_layout'>
        <Space
                direction="vertical"
                style={{
                  width: '100%',
                  height: '100%'
                }}
                size={[0, 48]}
          >
          <Layout style={{height: "100%"}}>
            <Sider style={siderStyle}>
              <LeftNav />
            </Sider>
            <Layout>
              <Header />
              <Content style={contentStyle}>
                {/* 路由注册 */}
                  <Switch>
                    <Route path="/admin/home" component={Home}/>
                    <Route path="/admin/category" component={Category}/>
                    <Route path="/admin/product" component={Product}/>
                    <Route path="/admin/user" component={User}/>
                    <Route path="/admin/role" component={Role}/>
                    <Route path="/admin/charts/bar" component={Bar}/>
                    <Route path="/admin/charts/pie" component={Pie}/>
                    <Route path="/admin/charts/line" component={Line}/>
                    <Redirect to="/admin/home" />
                  </Switch>
              </Content>
              <Footer style={footerStyle}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
            </Layout>
          </Layout>
        </Space>
      </div>
    )
  }
  
}

export default Admin
