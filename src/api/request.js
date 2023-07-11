// 该文件主要对axios做一个封装
import axios from "axios";
const request = axios.create({
    baseURL: 'http://localhost:30001',
    timeout: 5000
})

request.interceptors.request.use(conf => {

    return conf
})

request.interceptors.response.use(res => {
    return res
}, error => {
    return Promise.reject(error)
})

export default request