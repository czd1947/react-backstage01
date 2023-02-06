import React from 'react'
import {Redirect} from "react-router-dom"
import memoryUtil from "../../utils/memoryUtil"
import localStoreUtil from '../../utils/localStorageUtil'

export default function Admin() {
  const [count, setCount] = React.useState(0)
  function logout () {
    localStoreUtil.delUser()
    setCount(count + 1)
  }

  let user = memoryUtil.user
  if(!user || !user.id) {
      return <Redirect to="/login" />
  }else {
    return (
      <div>用户名称： {memoryUtil.user.name}, <button onClick={logout}>退出登录</button></div>
    )
  }
  
}
