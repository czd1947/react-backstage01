import axios from "axios";

// 封装 axios请求
export default function request(url, data, method = "get"){
    if(method === "get") {
        return axios.get(url, {
            params: data
        })
    } else {
        return axios.post(url, data)
    }
}