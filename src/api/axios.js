import axios from "axios"
import {message} from "antd"
/**
 * 封装axios库
 * 优化1: 统一处理请求异常
 *  在外层包一个自己创建的promise对象
 *  在请求出错时, 不reject(error), 而是显示错误提示
 * 优化2: 异步得到不是reponse, 而是response.data
 *  在请求成功resolve时: resolve(response.data)
 * @param {*} url 请求地址
 * @param {*} data 请求数据 : 包含get 和 post的
 * @param {*} method 请求类型 get/post
 * @returns Promise 对象
 */
export default function request(url, data, method = "get"){
    // new Promise 返回一个Promise对象
    return new Promise( (resolve, reject) => {
        let promiseNode;
        if( method === "get") {
            promiseNode = axios.get(url, { 
                params : data
            })
        } else {
            promiseNode = axios.post(url, data)
        }
        // 处理请求的结果
        // 成功: 调用resolve(value)
        // 失败: 不调用reject(reason), 而是提示异常信息
        promiseNode.then( response => {
            resolve(response.data)
        }).catch (error => {
            console.log(error)
            //message.error 为Message的Api栏全局方法
            message.error(error.message)
        })
    })
}