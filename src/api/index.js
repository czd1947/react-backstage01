import request from "./axios"


/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise
 */

const BASE_URL = "http://laravel9.com/api/"
// 登录
export const loginReq = (name, password) => request(BASE_URL + "login", {name, password}, "post")